export interface FrontMatter {
	id: string;
	title: string;
	date: Date;
	desc: string;
	tags: string;
}

export function getFilenameFromTitle(title: string, prefix: string) {
	const fileNameParts = title.toLowerCase().split('(');
	const fileName = `${prefix}/${fileNameParts[0].trim().toLowerCase().split(' ').join('-')}`;

	console.log('filename', fileName);
	console.log('ok', fileName[fileName.length - 1] === '?' ? fileName.slice(0, -1) : fileName);
	return fileName[fileName.length - 1] === '?' ? fileName.slice(0, -1) : fileName;
}

export function isNotItPost(tags: string) {
	return tags.includes('lifestyle');
}
