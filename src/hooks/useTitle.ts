import { useEffect } from 'react';

export const useTitle = (title: string, fallback = 'el-shamadan') => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = fallback;
    };
  });
};
