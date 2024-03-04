"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBlogInput = exports.BlogInput = void 0;
const zod_1 = require("zod");
exports.BlogInput = zod_1.z.object({
    Title: zod_1.z.string(),
    Content: zod_1.z.string()
});
exports.UpdateBlogInput = zod_1.z.object({
    id: zod_1.z.number(),
    Title: zod_1.z.string(),
    Content: zod_1.z.string()
});
