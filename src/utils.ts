export function getImageURL(image?: string): string {
    console.log(image);

    return image
        ? `https://images.and249.codes/${image}`
        : 'https://images.and249.codes/placeholder-social.jpg';
}
