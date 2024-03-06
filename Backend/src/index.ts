import { Hono } from "hono";
import { cors } from "hono/cors";
import {UserRoute} from "./Routes/User"
import {BlogRoute} from "./Routes/Blog"

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET_KEY:string
  };
}>().basePath("/api/v1");


app.use("/*",cors());
app.route('/user',UserRoute);
app.route('/blog',BlogRoute);



export default app;
