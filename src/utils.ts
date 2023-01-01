import type { Post } from '~/types/post';

export function getImageURL(image?: string): string {
    return image
        ? `https://images.and249.codes/${image}`
        : 'https://images.and249.codes/default.png';
}

export function getPosts(): Post[] {
    let postsImport: any = import.meta.glob('./pages/blog/*.md', {
        eager: true,
    });

    let posts = Object.values<Post>(postsImport);
    let filteredPosts = posts.filter((post) => !post.frontmatter.draft);

    return filteredPosts;
}
