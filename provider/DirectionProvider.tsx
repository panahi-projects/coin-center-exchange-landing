"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Direction = 'ltr' | 'rtl';

interface DirectionContextProps {
  direction: Direction;
  toggleDirection: () => void;
}

const DirectionContext = createContext<DirectionContextProps | undefined>(undefined);

export const useDirection = (): DirectionContextProps => {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error('useDirection must be used within a DirectionProvider');
  }
  return context;
};

export const DirectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [direction, setDirection] = useState<Direction>('rtl');

  const toggleDirection = () => {
    setDirection((prevDirection) => (prevDirection === 'ltr' ? 'rtl' : 'ltr'));
  };

  return (
    <DirectionContext.Provider value={{ direction, toggleDirection }}>
      <div dir={direction}>{children}</div>
    </DirectionContext.Provider>
  );
};
