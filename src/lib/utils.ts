export function getFilenameFromTitle(title: string, prefix: string) {
	return `${prefix}/${title.toLowerCase().split(' ').join('-')}`;
}

export interface FrontMatter {
	id: string;
	title: string;
	date: Date;
	desc: string;
}
