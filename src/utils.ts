export function getImageURL(image?: string): string {
    return image
        ? `https://images.and249.codes/${image}`
        : 'https://images.and249.codes/placeholder-social.jpg';
}
