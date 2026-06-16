export const formatCharacterCount = (
    current: number,
    limit: number
): string => {
    return `${current}/${limit}`
};

export const formatWordCount = (count: number): string => {
    return `${count} word${count === 1? '' : 's'}`;
};