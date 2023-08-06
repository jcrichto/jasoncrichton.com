import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			title: z.string(),
			projectType: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			hero_type: z.string(),
			hero_video: z.string().optional(),
			hero_img: z.string().optional(),
			bodyclass: z.string().optional(),
			logo: z.string(),
		}),
	}),
};