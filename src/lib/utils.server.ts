import * as fs from 'fs';
import * as path from 'path';
import { promisify } from 'util';
import * as z from 'zod';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import matter from 'gray-matter';

const readDirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);

const remarkProcessor = remark().use(remarkHtml);

const blogSchema = z.object({
	id: z.string(),
	title: z.string(),
	date: z.date(),
	desc: z.string(),
	tags: z.string()
});

const blogsDir = './src/lib/content/blogs';

async function processMarkdown(markdown: string) {
	return remarkProcessor.process(markdown).then((result) => result.toString());
}

async function getBlog(filename: string) {
	const filePath = path.join(blogsDir, filename);
	const fileContent = await readFileAsync(filePath, 'utf8');

	const { content, data } = matter(fileContent);

	let frontmatter: z.infer<typeof blogSchema>;
	try {
		frontmatter = blogSchema.parse(data);
	} catch (e) {
		throw new Error(`'${filePath}' contains invalid frontmatter: ${(e as Error).message}`);
	}

	return {
		frontmatter,
		content
	};
}

export async function getAllBlogs() {
	const files = await readDirAsync(blogsDir);

	const blogs = await Promise.all(files.map(async (filename: string) => getBlog(filename)));

	return blogs.sort((a, b) => b.frontmatter.date - a.frontmatter.date);
}
