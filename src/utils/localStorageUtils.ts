type Keys = '@komorebi/theme';

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
};

export default storage;
