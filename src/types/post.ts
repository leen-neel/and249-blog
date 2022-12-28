export type Post = {
    frontmatter: {
        title: string;
        description: string;
        heroImage: string;
        pubDate: string;
        tags: string[];
        category: string;
        draft: boolean;
    };

    url: string;
};
