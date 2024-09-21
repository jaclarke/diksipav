export interface FrontMatter {
	id: string;
	title: string;
	date: Date;
	desc: string;
	tags: string;
}

export function getFilenameFromTitle(title: string, prefix: string) {
	const fileNameParts = title
		.replace(/[\s/—]+/g, ' ')
		.toLowerCase()
		.split('(');
	const fileName = `${prefix}/${fileNameParts[0].trim().split(' ').join('-')}`;

	return fileName[fileName.length - 1] === '?' ? fileName.slice(0, -1) : fileName;
}

export function isNotItPost(tags: string) {
	return tags.includes('lifestyle');
}
