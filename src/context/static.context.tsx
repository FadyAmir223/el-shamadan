import { createContext, ReactNode, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { waferProduct } from '../utils/types';

type XContextType = {
  products: string[];
  waferProducts: waferProduct[];
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
      id: 'king',
      name: t('king.name'),
      desc: t('king.desc'),
      coverUrl: 'images/packet/king.webp',
      characterUrl: 'images/character/king.webp',
    },
    {
      id: 'mafia',
      name: t('mafia.name'),
      desc: t('mafia.desc'),
      coverUrl: 'images/packet/mafia.webp',
      characterUrl: 'images/character/mafia.webp',
    },
    {
      id: 'magician',
      name: t('magician.name'),
      desc: t('magician.desc'),
      coverUrl: 'images/packet/magician.webp',
      characterUrl: 'images/character/magician.webp',
    },
    {
      id: 'hero',
      name: t('hero.name'),
      desc: t('hero.desc'),
      coverUrl: 'images/packet/hero.webp',
      characterUrl: 'images/character/hero.webp',
    },
    {
      id: 'joker',
      name: t('joker.name'),
      desc: t('joker.desc'),
      coverUrl: 'images/packet/joker.webp',
      characterUrl: 'images/character/joker.webp',
    },
    {
      id: 'diva',
      name: t('diva.name'),
      desc: t('diva.desc'),
      coverUrl: 'images/packet/diva.webp',
      characterUrl: 'images/character/diva.webp',
    },
  ];

  return (
    <StaticContext.Provider value={{ products, waferProducts }}>
      {children}
    </StaticContext.Provider>
  );
};
