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

  const products = t('productList', { returnObjects: true }) as string[];
  const waferProducts = [
    'king',
    'mafia',
    'magician',
    'hero',
    'joker',
    'diva',
  ].map((character) => ({
    id: character,
    name: t(`${character}.name`),
    desc: t(`${character}.desc`),
    coverUrl: `images/packet/${character}.webp`,
    characterUrl: `images/character/${character}.webp`,
  }));

  return (
    <StaticContext.Provider value={{ products, waferProducts }}>
      {children}
    </StaticContext.Provider>
  );
};
