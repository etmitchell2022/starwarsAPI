import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const SelectShipItem = ({ starship }) => {
  const { manufacturer, name } = starship;
  return (
    <>
      <MenuItem key={name} value={manufacturer}>
        {manufacturer}
      </MenuItem>
    </>
  );
};

export default SelectShipItem;
