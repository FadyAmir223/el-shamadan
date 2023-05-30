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
      coverUrl: 'images/packet/king.png',
      characterUrl: 'images/character/king.png',
    },
    {
      id: 'mafia',
      name: t('mafia.name'),
      desc: t('mafia.desc'),
      coverUrl: 'images/packet/mafia.png',
      characterUrl: 'images/character/mafia.png',
    },
    {
      id: 'magician',
      name: t('magician.name'),
      desc: t('magician.desc'),
      coverUrl: 'images/packet/magician.png',
      characterUrl: 'images/character/magician.png',
    },
    {
      id: 'hero',
      name: t('hero.name'),
      desc: t('hero.desc'),
      coverUrl: 'images/packet/hero.png',
      characterUrl: 'images/character/hero.png',
    },
    {
      id: 'joker',
      name: t('joker.name'),
      desc: t('joker.desc'),
      coverUrl: 'images/packet/joker.png',
      characterUrl: 'images/character/joker.png',
    },
    {
      id: 'diva',
      name: t('diva.name'),
      desc: t('diva.desc'),
      coverUrl: 'images/packet/diva.png',
      characterUrl: 'images/character/diva.png',
    },
  ];

  return (
    <StaticContext.Provider value={{ products, waferProducts }}>
      {children}
    </StaticContext.Provider>
  );
};
