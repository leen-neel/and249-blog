export function getImageURL(image?: string): string {
    return image
        ? `http://images.and249.codes/${image}`
        : 'http://images.and249.codes/placeholder-social.jpg';
}
