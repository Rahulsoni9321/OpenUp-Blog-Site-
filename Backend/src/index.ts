import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { jwt } from "hono/jwt";
import {UserRoute} from "./Routes/User"
import {BlogRoute} from "./Routes/Blog"

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY:string
  };
}>().basePath("/api/v1");



app.route('/user',UserRoute);
app.route('/blog',BlogRoute);



export default app;
