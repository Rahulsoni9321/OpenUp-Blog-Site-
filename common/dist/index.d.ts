import { z } from "zod";
export declare const SignupInput: z.ZodObject<{
    FirstName: z.ZodString;
    LastName: z.ZodString;
    Email: z.ZodString;
    Bio: z.ZodString;
    Password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    FirstName: string;
    LastName: string;
    Email: string;
    Bio: string;
    Password: string;
}, {
    FirstName: string;
    LastName: string;
    Email: string;
    Bio: string;
    Password: string;
}>;
export type typeSignupInput = z.infer<typeof SignupInput>;
export declare const SiginInput: z.ZodObject<{
    Email: z.ZodString;
    Password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    Email: string;
    Password: string;
}, {
    Email: string;
    Password: string;
}>;
export type typeSiginInput = z.infer<typeof SiginInput>;
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
export type typeBlogInput = z.infer<typeof BlogInput>;
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
export type typeUpdateBlogInput = z.infer<typeof UpdateBlogInput>;
