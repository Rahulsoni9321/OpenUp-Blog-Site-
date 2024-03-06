"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogInput = exports.BlogInput = exports.SiginInput = exports.SignupInput = void 0;
const zod_1 = require("zod");
exports.SignupInput = zod_1.z.object({
    FirstName: zod_1.z.string(),
    LastName: zod_1.z.string(),
    Email: zod_1.z.string().email(),
    Password: zod_1.z.string().min(6, { message: "Password is too short just like your dick." }).max(16)
});
exports.SiginInput = zod_1.z.object({
    Email: zod_1.z.string().email(),
    Password: zod_1.z.string().min(6).max(16)
});
exports.BlogInput = zod_1.z.object({
    Title: zod_1.z.string(),
    Content: zod_1.z.string()
});
exports.UpdateBlogInput = zod_1.z.object({
    id: zod_1.z.number(),
    Title: zod_1.z.string(),
    Content: zod_1.z.string()
});
