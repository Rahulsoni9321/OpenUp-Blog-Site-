import { z } from "zod";
export declare const SignupInput: z.ZodObject<{
    FirstName: z.ZodString;
    LastName: z.ZodString;
    Email: z.ZodString;
    Password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}, {
    FirstName: string;
    LastName: string;
    Email: string;
    Password: string;
}>;
export type SignupInput = z.infer<typeof SignupInput>;
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
export type SiginInput = z.infer<typeof SiginInput>;
