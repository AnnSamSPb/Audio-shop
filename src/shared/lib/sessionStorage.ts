export const sessionStorage = {
  getItem: <T>(key: string, defaultValue?: T): T => {
    if (typeof window === 'undefined') return defaultValue as T;
    
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : (defaultValue as T);
    } catch {
      return defaultValue as T;
    }
  },

  setItem: <T>(key: string, value: T): void => {
    if (typeof window === 'undefined') return;
    
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn(`SessionStorage error for key "${key}":`, error);
    }
  },

  removeItem: (key: string): void => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.removeItem(key);
  },

  clear: (): void => {
    if (typeof window === 'undefined') return;
    window.sessionStorage.clear();
  },
};
