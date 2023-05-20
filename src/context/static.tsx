import React, { createContext, useState } from 'react';

interface XContextType {
  x: number;
  // setX: React.Dispatch<React.SetStateAction<number>>;
}

const initialXValue = 0;

export const XContext = createContext<XContextType>({
  x: initialXValue,
  // setX: () => {},
});

export const XProvider: React.FC = ({ children }) => {
  const [x, setX] = useState<number>(initialXValue);

  return <XContext.Provider value={{ x, setX }}>{children}</XContext.Provider>;
};
