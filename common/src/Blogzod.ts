import {z} from "zod";


export const BlogInput=z.object({
    Title:z.string(),
    Content:z.string()
})

export type BlogInput=z.infer<typeof BlogInput>

export const UpdateBlogInput=z.object({
    id:z.number(),
    Title:z.string(),
    Content:z.string()
})

export type UpdateBlogInput=z.infer<typeof UpdateBlogInput>