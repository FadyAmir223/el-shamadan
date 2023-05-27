import { useEffect } from 'react';

export const useTitle = (title: string, fallback = 'el-shamedan') => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = fallback;
    };
  });
};
