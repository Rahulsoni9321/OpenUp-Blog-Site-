import {z} from "zod";

export const SignupInput=z.object({
    FirstName:z.string(),
    LastName:z.string(),
    Email:z.string().email(),
    Password:z.string().min(6).max(16)
})

export type SignupInput=z.infer<typeof SignupInput>

export const SiginInput=z.object({
    Email:z.string().email(),
    Password:z.string().min(6).max(16)
})

export type SiginInput=z.infer<typeof SiginInput>

