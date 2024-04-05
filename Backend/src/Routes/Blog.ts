import { Hono } from "hono";
import { verify } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { BlogInput, UpdateBlogInput } from "@index.developers/common";

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

    const {success}=BlogInput.safeParse(body)
    if (success){
    const NewBlog=await prisma.blog.create({
      data: {
        Title: body.Title,
        Content: body.Content,
        Time:new Date(),
        AuthorId: Number(authorid),
        Published: true,
      },
    });

    return c.json({
      message: "Blog Published Successfully.",
      Blog:NewBlog
    });
  
  }
  else{
    c.status(403)
    return c.json({
      message:'Invalid Blog Credentials. Please try again.'
    })
  }
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

    const {success}=UpdateBlogInput.safeParse(body)
    if (success) {
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
  } 
  else{
    c.status(403)
    return c.json({
      message:'Invalid Blog Credentials. Please try again.'
    })
  }
}catch (error) {
    c.status(411);
    return c.json({
      message: "Something went wrong while Updating the Blog.Please try again.",
      details: error,
    });
  }
});

//Todo : add Pagination
BlogRoute.get("/bulk", async (c) => {
  const {page}=c.req.query();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  
  const limit=5;
  let firstIndex=0;
  let LastIndex=limit-1;
  try {
    const AllBlogs = await prisma.blog.findMany({
      select:{
        Content:true,
        Title:true,
        Time:true,
        id:true,
        Author:{
          select:{
            FirstName:true,
            LastName:true
          }
        }
      }
    });
   
    if (Number(page)>1){
      firstIndex=(Number(page)-1)*limit
      LastIndex=Number(page)*limit-1
    }

    if (LastIndex>=AllBlogs.length){
      LastIndex=AllBlogs.length-1;
    }

  
   
    const BLogSent=AllBlogs.reverse().slice(firstIndex,LastIndex+1)

    return c.json({
      AllBlogs:BLogSent,
      Bloglength:AllBlogs.length
    });
  } catch (error) {
    c.status(411);
    console.log(error)
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
      select:{
        Content:true,
        Title:true,
        Time:true,
        id:true,
        Author:{
          select:{
            FirstName:true,
            LastName:true,
            Bio:true
          }
        }
      }
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


