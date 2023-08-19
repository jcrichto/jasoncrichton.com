import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: ({ image }) => z.object({
			title: z.string(),
			projectType: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: image().refine((img) => img.width >= 300, { message: "Listing Image must be at lest 800 wide!",}),
			img_alt: z.string().optional(),
			hero_type: z.string(),
			hero_video: z.string().optional(),
			hero_img: image().refine((img) => img.width >= 800, { message: "Hero Image must be at lest 800 wide!",}),
			bodyclass: z.string().optional(),
			logo: z.string(),
		}),
	}),
};