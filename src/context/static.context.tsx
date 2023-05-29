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

  const waferProducts = products.map((i) => ({
    id: i,
    name: t(`${i}.name`),
    desc: t(`${i}.desc`),
    coverUrl: `images/packet/${i}.png`,
    characterUrl: `images/character/${i}.png`,
  }));

  return (
    <StaticContext.Provider value={{ products, waferProducts }}>
      {children}
    </StaticContext.Provider>
  );
};
