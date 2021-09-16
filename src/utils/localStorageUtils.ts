type Keys = '@komorebi/theme' | '@komorebi/saved';

const getItem = (key: Keys): string => localStorage.getItem(key);
const setItem = (key: Keys, value: string): void =>
  localStorage.setItem(key, value);

const storage = {
  getTheme(): string {
    return getItem('@komorebi/theme');
  },
  setTheme(newTheme: 'light' | 'dark'): void {
    setItem('@komorebi/theme', newTheme);
  },
  getSavedItems(): string[] {
    const savedItems = getItem('@komorebi/saved');

    return savedItems ? JSON.parse(savedItems) : [];
  },
  savePost(postId: string): void {
    const savedItems: string[] = this.getSavedItems();
    if (!savedItems.find((i) => i === postId)) {
      savedItems.push(postId);
    }
    setItem('@komorebi/saved', JSON.stringify(savedItems));
  },
  removeSavedPost(postId: string): void {
    let savedItems: string[] = this.getSavedItems();

    savedItems = savedItems.filter((i) => i !== postId);

    setItem('@komorebi/saved', JSON.stringify(savedItems));
  },
};

export default storage;
