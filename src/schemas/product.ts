import { z } from "zod"

export const productSchema = z.object({
    name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    description: z.string().min(10, "A descrição deve ter pelo menos 10 caracteres"),
    price: z.coerce.number().positive("O preço deve ser maior que zero"),
    stock: z.coerce.number().int().min(0, "O estoque não pode ser negativo"),
    file: z.custom<FileList>()
    .transform((val) => (val instanceof FileList ? val : undefined))
    .optional(),
});

export type ProductFormData = z.infer<typeof productSchema>;

