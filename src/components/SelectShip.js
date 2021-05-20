import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { useStarwars } from '../context/StarwarsContext';
import SelectShipItem from './SelectShipItem';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectShip = () => {
  const classes = useStyles();
  const [ship, setShip] = useState('');

  const starwarsContext = useStarwars();
  const { starships } = starwarsContext;


  const handleChange = (e) => {
    setShip(e.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id='demo-simple-select-label'>
          Select Starship Manufacturer
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={ship}
          onChange={handleChange}
        >
          {starships.map((starship) => {
            return <SelectShipItem starship={starship} />;
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectShip;
