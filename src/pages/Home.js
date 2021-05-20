import React, { useEffect } from 'react';
import SelectShip from '../components/SelectShip';
import { useStarwars } from '../context/StarwarsContext';

const Home = () => {
  const starwarsContext = useStarwars();
  const { starships, fetchAllManufacturers } = starwarsContext;

  useEffect(() => {
    fetchAllManufacturers();
  }, [starships]);

  return (
    <div>
      <SelectShip />
    </div>
  );
};

export default Home;
