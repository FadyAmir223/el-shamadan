import { createContext, ReactNode, FC } from 'react';

type XContextType = {
  products: string[];
  waferProducts: {
    name: string;
    coverUrl: string;
    characterUrl: string;
  }[];
};

const products = ['king', 'mafia', 'magician', 'hero', 'joker', 'diva'];

const waferProducts = [
  {
    name: 'king',
    coverUrl: 'images/king.png',
    characterUrl: 'images/king_.png',
  },
  {
    name: 'mafia',
    coverUrl: 'images/mafia.png',
    characterUrl: 'images/mafia_.png',
  },
  {
    name: 'magician',
    coverUrl: 'images/magician.png',
    characterUrl: 'images/magician_.png',
  },
  {
    name: 'hero',
    coverUrl: 'images/hero.png',
    characterUrl: 'images/hero_.png',
  },
  {
    name: 'joker',
    coverUrl: 'images/joker.png',
    characterUrl: 'images/joker_.png',
  },
  {
    name: 'diva',
    coverUrl: 'images/diva.png',
    characterUrl: 'images/diva_.png',
  },
];

export const StaticContext = createContext<XContextType>({
  products,
  waferProducts,
});

export const StaticProvider: FC<{
  children: ReactNode;
}> = ({ children }) => {
  return (
    <StaticContext.Provider value={{ products, waferProducts }}>
      {children}
    </StaticContext.Provider>
  );
};
