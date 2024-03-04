import { z } from "zod";
export declare const BlogInput: z.ZodObject<{
    Title: z.ZodString;
    Content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Title: string;
    Content: string;
}, {
    Title: string;
    Content: string;
}>;
export type BlogInput = z.infer<typeof BlogInput>;
export declare const UpdateBlogInput: z.ZodObject<{
    id: z.ZodNumber;
    Title: z.ZodString;
    Content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Title: string;
    Content: string;
    id: number;
}, {
    Title: string;
    Content: string;
    id: number;
}>;
export type UpdateBlogInput = z.infer<typeof UpdateBlogInput>;
