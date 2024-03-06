import {z} from "zod";

export const SignupInput=z.object({
    FirstName:z.string(),
    LastName:z.string(),
    Email:z.string().email(),
    Password:z.string().min(6,{message:"Password is too short just like your dick."}).max(16)
})

export type typeSignupInput=z.infer<typeof SignupInput>

export const SiginInput=z.object({
    Email:z.string().email(),
    Password:z.string().min(6).max(16)
})

export type typeSiginInput=z.infer<typeof SiginInput>


export const BlogInput=z.object({
    Title:z.string(),
    Content:z.string()
})

export type typeBlogInput=z.infer<typeof BlogInput>

export const UpdateBlogInput=z.object({
     id:z.number(),
    Title:z.string(),
    Content:z.string()
})

export type typeUpdateBlogInput=z.infer<typeof UpdateBlogInput>