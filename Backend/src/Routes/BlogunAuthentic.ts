import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const UnAuthenticBlogRoute = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY: string;
  };
  
}>();

UnAuthenticBlogRoute.get("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const limit = 10;
  let firstIndex = 0;
  let LastIndex = limit - 1;
  try {
    const AllBlogs = await prisma.blog.findMany({
      select: {
        Content: true,
        Title: true,
        id: true,
        Author: {
          select: {
            FirstName: true,
            LastName: true,
          },
        },
      },
    });

    

    if (LastIndex >= AllBlogs.length) {
      LastIndex = AllBlogs.length - 1;
    }

    const BLogSent = AllBlogs.slice(firstIndex, LastIndex + 1);

    return c.json({
      AllBlogs: BLogSent,
    });
  } catch (error) {
    c.status(411);
    console.log(error);
    return c.json({
      message: "Error while fetching Explore. Please try again.",
      details: error,
    });
  }
});
