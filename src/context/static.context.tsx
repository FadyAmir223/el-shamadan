import { createContext, ReactNode, FC } from 'react';
import { useTranslation } from 'react-i18next';

type XContextType = {
  products: string[];
  waferProducts: {
    name: string;
    desc: string;
    coverUrl: string;
    characterUrl: string;
  }[];
};

export const StaticContext = createContext<XContextType>({
  products: [],
  waferProducts: [],
});

export const StaticProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  const [t] = useTranslation('products');

  const products = t('productList', {
    returnObjects: true,
  }) as string[];

  const waferProducts = [
    {
      name: t('king.name'),
      desc: t('king.desc'),
      coverUrl: 'images/king.png',
      characterUrl: 'images/king_.png',
    },
    {
      name: t('mafia.name'),
      desc: t('mafia.desc'),
      coverUrl: 'images/mafia.png',
      characterUrl: 'images/mafia_.png',
    },
    {
      name: t('magician.name'),
      desc: t('magician.desc'),
      coverUrl: 'images/magician.png',
      characterUrl: 'images/magician_.png',
    },
    {
      name: t('hero.name'),
      desc: t('hero.desc'),
      coverUrl: 'images/hero.png',
      characterUrl: 'images/hero_.png',
    },
    {
      name: t('joker.name'),
      desc: t('joker.desc'),
      coverUrl: 'images/joker.png',
      characterUrl: 'images/joker_.png',
    },
    {
      name: t('diva.name'),
      desc: t('diva.desc'),
      coverUrl: 'images/diva.png',
      characterUrl: 'images/diva_.png',
    },
  ];

  return (
    <StaticContext.Provider value={{ products, waferProducts }}>
      {children}
    </StaticContext.Provider>
  );
};
