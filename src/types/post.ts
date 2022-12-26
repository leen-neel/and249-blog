export type Post = {
    frontmatter: {
        title: string;
        description: string;
        heroImage: string;
        pubDate: string;
    };

    url: string;
};
