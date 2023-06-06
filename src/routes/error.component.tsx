import { useTranslation } from 'react-i18next';
import { useTitle } from '../hooks/useTitle';

const Error = () => {
  const [t] = useTranslation('errors');

  useTitle('error');

  return (
    <main className="py-16 flex flex-col items-center font-[roboto]">
      <div className="relative">
        <img src="images/character/king.webp" alt="error" className="h-48" />
        <span className="absolute text-5xl right-3 top-1/2 translate-x-1/3 -scale-x-100">
          ✋
        </span>
      </div>
      <p className="uppercase dark:text-yellow text-purple text-2xl pt-3">
        {t('pageNotFound.title')}
      </p>
      <p className="dark:text-yellow/90 text-purple/90 text-sm">
        {t('pageNotFound.desc')}
      </p>
    </main>
  );
};

export default Error;
