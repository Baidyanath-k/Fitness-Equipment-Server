import { z } from "zod";

const createProductValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, 'Product name must be at least 1 characters long'),
        image: z.string().optional(),
        price: z.number(),
        description: z.string().min(1, 'Product description must be at least 1 characters long'),
    })
});

const updateProductValidationSchema = z.object({
    body: z.object({
        ame: z.string().optional(),
        image: z.string().optional(),
        price: z.number().optional(),
        description: z.string().optional(),
    })
});

export const productValidation = {
    createProductValidationSchema,
    updateProductValidationSchema
}