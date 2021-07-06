export const firstUpperCase = (word: string): string => {
  return word
    .split(' ')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};
