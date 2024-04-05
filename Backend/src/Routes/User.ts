import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { Hono } from "hono";
import { SiginInput, SignupInput } from "@index.developers/common";

 export const UserRoute = new Hono<{
  Bindings:{
    DATABASE_URL:string,
    JWT_SECRET_KEY:string
  },
  Variables:{
    authorid:string
  }
}>();

UserRoute.use('/userprofile/*',async (c:any, next:any)=>{
  const token = c.req.header("authorization") || "";
  try {
    const jwttoken = token?.split(" ")[1];
    const CheckingToken = await verify(jwttoken, c.env.JWT_SECRET_KEY);
    if (CheckingToken) {
      c.set("authorid", CheckingToken.userid);
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


UserRoute.post("/signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body=await c.req.json();
  
    try{   //checking if user exist or not
    //  const findinguser = await  prisma.user.findFirst({   We dont require this check because when we are defining our schema there we had mentioned clearly that the email should be a unique entry so prisma will throw an error if someone tries to signup with register email
    //     where:{
    //       Email:body.Email     
    //     }
    //   })
  
    //   if (findinguser ){
    //     c.status(500)
    //     return c.json({
    //       message:"User already exists"
    //     })
    //   }
  
      //creating a new user

      const {success}=SignupInput.safeParse(body)
      if (success) {
      const newuser =await prisma.user.create({
       data:{
         FirstName:body.FirstName,
         LastName:body.LastName,
         Bio:body.Bio,
         Email:body.Email,
         Password:body.Password,
       }
      })
  
      const jwt=await sign({
        userid:newuser.id
      },c.env.JWT_SECRET_KEY)
  
      return c.json({
        message: newuser,
        token:jwt
        
      });
    }
    else {
      c.status(403)
      return c.json({
        message:"Invalid Credentials types.Please try again"
      })
    }
  
    }   
     //if unknown error occurs
    catch(error) {
      console.log(error)
      return c.json({
       message :{ message:"Something Went Wrong. Please Try again",
        details:error
      }
      })
    }
  });
  
  UserRoute.post("/signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    const body=await c.req.json();


  
    try{
  
      const {success} =SiginInput.safeParse(body);
      if (success){
      const findinguser=await prisma.user.findFirst({
        where:{
          Email:body.Email,
          Password:body.Password
        }
      })
    
      if (findinguser){
        const jwt=await sign({userid:findinguser.id},c.env.JWT_SECRET_KEY)
    
        return c.json({
          message:findinguser,
          token:jwt
        })
  
      }
      c.status(403) //403 when the user is not authorized
      return c.json({
        message:"Incorrect Credentials.Please try again."
      })
    }
    else {
      c.status(403)
      return c.json({
        message:"Invalid Credential type. Please try again."
      })

    }
    }
    catch(error){
      c.status(400);
      return c.json({
        message:"Error while Signing in. Please Try Again.",
        details:error
      })
    }
  
  });
  

  UserRoute.get('/userprofile',async (c)=>{
       const userid=c.get("authorid");
       const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate());

     try
     {
       const userdetails = await prisma.user.findFirst({
        where:{
          id : Number(userid)
        },
        select:{
          FirstName:true,
          LastName:true,
          Bio:true,
          Blog:true,
          id:true
        }
      })

      return c.json({
        user:userdetails
      })

      }
      catch(error){
        console.log(error)
        c.status(400);
        return c.json({
          message:"Error while fetching user information. Please Try Again.",
          details:error
        })
      }
       
  })





  