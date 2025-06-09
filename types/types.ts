export type dbPost = {
	id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	revisedAt: string;
	title: string;
	contents: string;
	cover_img: { url?: string };
	tag: string;
};

export type resPost = {
	contents: dbPost[];
	totalCount: Number;
	offset: Number;
	limit: Number;
};

export type Post = {
	id: string;
	createdAt: Date;
	title: string;
	contents: string;
	summary: string;
	img?: string;
	tag?: string;
};
