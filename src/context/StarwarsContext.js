import { createContext, useContext } from 'react';

const StarwarsContext = createContext();

export default StarwarsContext;

export const useStarwars = () => {
  const context = useContext(StarwarsContext);
  if (!context) {
    throw new Error('Context not provided');
  }
  return context;
};
