export type Items = {
	item: string;
	link?: string;
	hidden?: boolean;
	handleClick?: () => void;
};

export enum PageItems {
	AboutMe = 'about me',
	Resume = 'resume',
	Projects = 'projects',
	GitHub = 'github'
}

export const aboutMe = [
	{ item: `Hi, I'm Paphawit but you can call me Great.` },
	{ item: `I'm software engineer who love to learn new things, all of my skills are self-taught.` },
	{ item: `I'm currently working at London Stock Exchange Group as a software engineer.` },
	{ item: `I'm interested in web development, devops, and cloud computing.` },
	{ item: `I love to tackle challenging problems and learn new things.` },
	{ item: `I'm a fast learner and I can adapt to new environment quickly.` }
];

export const project = [
	{
		item: 'Goodbuy price comparison',
		link: 'https://goodbuy.greatng.me'
	}
];

export type Details = {
	item: string;
	link?: string;
};

export const ITEMS_DETAILS: Partial<Record<PageItems, Details[]>> = {
	[PageItems.AboutMe]: aboutMe,
	[PageItems.Projects]: project
};
