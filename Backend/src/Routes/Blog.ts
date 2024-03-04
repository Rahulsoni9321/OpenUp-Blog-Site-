import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const BlogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
  Variables: {
    userid: string;
  };
}>();

BlogRoute.use("/*", async (c, next) => {
  const token = c.req.header("authorization") || "";
  try {
    const jwttoken = token?.split(" ")[1];
    const CheckingToken = await verify(jwttoken, c.env.JWT_SECRET_KEY);
    console.log(CheckingToken)
    if (CheckingToken) {
      c.set("userid", CheckingToken.userid);
      await next();
    } else {
      c.status(403);
      return c.json({
        message: "Invalid Token.",
      });
    }
  } catch (error) {
    
    c.status(403);
    return c.json({
      message: "You are not logged in. Please try again.",
      details: error,
    });
  }
});

BlogRoute.post("/", async (c) => {
  const body = await c.req.json();
  const authorid = c.get("userid");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const NewBlog=await prisma.blog.create({
      data: {
        Title: body.Title,
        Content: body.Content,
        AuthorId: Number(authorid),
        Published: true,
      },
    });

    return c.json({
      message: "Blog Published Successfully.",
      Blog:NewBlog
    });
  } 
  catch (error) {
    console.log(error)
    c.status(411);
    return c.json({
      message: "Something went wrong while posting the blog. Please try again",
      details: error,
    });
  }
});

BlogRoute.put("/", async (c) => {
  const body = await c.req.json();

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const ChangedBlog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        Title: body.Title,
        Content: body.Content,
      },
    });

    return c.json({
      message: "Blog Update Successfully.",
      UpdatedBlog:ChangedBlog
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Something went wrong while Updating the Blog.Please try again.",
      details: error,
    });
  }
});

//Todo : add Pagination
BlogRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const AllBlogs = await prisma.blog.findMany();

    return c.json({
      AllBlogs: AllBlogs,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Error while fetching all blogs. Please try again.",
      details: error,
    });
  }
});

BlogRoute.get("/:id", async (c) => {
  const blogid = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const getBlog = await prisma.blog.findFirst({
      where: {
        id: Number(blogid),
      },
    });

    return c.json({
      Blog: getBlog,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: "Something went wrong while fetching the Blog.Please try again.",
      details: error,
    });
  }
});
