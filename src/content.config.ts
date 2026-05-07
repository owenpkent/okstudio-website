import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    status: z.enum(['live', 'coming-soon', 'active', 'planning']),
    tier: z.enum(['featured', 'secondary']),
    order: z.number(),
    repo: z.string().url().optional(),
    downloadUrl: z
      .string()
      .refine((v) => v.startsWith('http') || v.startsWith('#') || v.startsWith('/'), {
        message: 'downloadUrl must be a full URL, an anchor (#...), or a site-relative path (/...)',
      })
      .optional(),
    downloadLabel: z.string().default('Download'),
    pricing: z.string(),
    pricingNote: z.string().optional(),
    screenshot: z.string().optional(),
    icon: z.string().default('🛠'),
    category: z.enum(['Accessibility', 'Voice', 'Gaming', 'Music', 'Dev', 'Creative']),
    tags: z.array(z.string()).default([]),
    audience: z.string().optional(),
    related: z.array(z.string()).default([]),
    media: z
      .array(
        z.object({
          type: z.enum(['screenshot', 'gif', 'video']),
          src: z.string().optional(),
          alt: z.string(),
          caption: z.string().optional(),
          placeholder: z.boolean().default(false),
        })
      )
      .default([]),
    installSnippets: z
      .array(
        z.object({
          label: z.string(),
          lang: z.string().default('bash'),
          code: z.string(),
        })
      )
      .default([]),
    whatsNew: z
      .object({
        version: z.string(),
        date: z.string(),
        highlights: z.array(z.string()),
      })
      .optional(),
  }),
});

export const collections = { products };
