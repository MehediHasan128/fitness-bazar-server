import { z } from 'zod';

export const ProductValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty({ message: 'Name is required' }),
    price: z.number().positive({ message: 'Price must be a positive number' }),
    description: z.string().nonempty({ message: 'Description is required' }),
    imageUrl: z.string().nonempty({ message: 'Images are required' }),
    quantity: z.number(),
    category: z.string().nonempty({ message: 'Category is required' }),
    isDeleted: z.boolean().default(false),
  }),
});


export const updateProductValidationSchema = z.object({
    body: z.object({
      name: z.string().nonempty({ message: 'Name is required' }).optional(),
      price: z.number().positive({ message: 'Price must be a positive number' }).optional(),
      description: z.string().nonempty({ message: 'Description is required' }).optional(),
      imageUrl: z.string().nonempty({ message: 'Images are required' }).optional(),
      quantity: z.number().optional(),
      category: z.string().nonempty({ message: 'Category is required' }).optional(),
      isDeleted: z.boolean().default(false).optional(),
    }),
  });
