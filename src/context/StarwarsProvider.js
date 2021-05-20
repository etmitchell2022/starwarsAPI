import React, { useReducer } from 'react';
import StarwarsContext from './StarwarsContext';
import StarwarsReducer from './StarwarsReducer';
import { FETCH_ALL_SHIPS } from './types';

import axios from 'axios';

const initialState = {
  starships: [],
  current: null,
};

export const StarwarsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StarwarsReducer, initialState);

  //Get all starship manufacturers for select
  const fetchAllManufacturers = async () => {
    const res = await axios.get('https://swapi.dev/api/starships/');
    console.log(res.data.results);
    dispatch({ type: FETCH_ALL_SHIPS, payload: res.data.results });
  };

  return (
    <StarwarsContext.Provider
      value={{
        starships: state.starships,
        current: state.current,
        fetchAllManufacturers,
      }}
    >
      {children}
    </StarwarsContext.Provider>
  );
};
