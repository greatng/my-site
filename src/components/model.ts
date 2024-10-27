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
	`Hi, I'm Paphawit but you can call me Great.`,
	`I'm software engineer who love to learn new things, all of my skills are self-taught.`,
	`I'm currently working at London Stock Exchange Group as a software engineer.`,
	`I'm interested in web development, devops, and cloud computing.`,
	`I love to tackle challenging problems and learn new things.`,
	`I'm a fast learner and I can adapt to new environment quickly.`
];

export const ITEMS_DETAILS: Partial<Record<PageItems, string[]>> = {
	[PageItems.AboutMe]: aboutMe
};
