const getCroppedImageUrl = (url: string | undefined): string | undefined => {
    if (!url) return undefined;

    return url.replace('original', 'crop');
};

export default getCroppedImageUrl