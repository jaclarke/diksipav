import * as z from 'zod';
import matter from 'gray-matter';
import { read } from '$app/server';

const blogSchema = z.object({
	id: z.string(),
	title: z.string(),
	date: z.date(),
	desc: z.string(),
	seoDesc: z.string(),
	tags: z.string()
});

const blogsDir = import.meta.glob('$lib/content/blogs/**/*.svx', {
	query: 'url',
	eager: true
});

const blogs = Object.values(blogsDir);

export async function getAllBlogs() {
	const reads = await Promise.all(
		blogs.map(async (blog) => {
			const fileBuffer = await read(blog.default).arrayBuffer();
			const decoder = new TextDecoder();
			const str = decoder.decode(fileBuffer);
			return matter(str).data as z.infer<typeof blogSchema>;
		})
	);

	return reads.sort((a, b) => b.date - a.date);
}
