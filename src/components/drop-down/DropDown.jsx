import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Dropdown = () => {
  const classes = useStyles();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select an option</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedOption}
          onChange={handleOptionChange}
        >
          <MenuItem value={'option1'}>Option 1</MenuItem>
          <MenuItem value={'option2'}>Option 2</MenuItem>
          <MenuItem value={'option3'}>Option 3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
