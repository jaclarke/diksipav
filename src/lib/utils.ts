export interface FrontMatter {
	id: string;
	title: string;
	date: Date;
	desc: string;
	tags: string;
}

export function getFilenameFromTitle(title: string, prefix: string) {
	const fileName = `${prefix}/${title.toLowerCase().split(' ').join('-')}`;
	return fileName[fileName.length - 1] === '?' ? fileName.slice(0, -1) : fileName;
}

export function isNotItPost(tags: string) {
	return tags.includes('lifestyle');
}
