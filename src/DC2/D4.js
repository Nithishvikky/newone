import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';

const currencies = [
  {
    value: '',
    label: '',
  },
  {
    value: 'Apple',
    label: 'Apple',
  },
  {
    value: 'Banana',
    label: 'Banana',
  },
  {
    value: 'Orange',
    label: 'Orange',
  },
  {
    value: 'Cherry',
    label :'Cherry',
  },
  {
    value:'StrawBerry',
    label:'StrawBerry',
  }
];

 function D4() {
    const[name,setName]=useState("");
    const [headingText, setHeading] = useState("");
 

    function handeChange(event)
    {
        setName(event.target.value);
    }
    
    function handleClick()
    {
        setHeading(name);
    }
    function handleClicked(event)
    {
        console.log(event.target);
    }

  return (
    <div className='Day4'>
    <h1>Enter the name of your favorite fruit</h1>
    <TextField 
        label="Enter your name"
        autoComplete='on'
        value={name}
        onChange={handeChange}
    />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      autoComplete="on"
    >
      <div>
        <TextField
          id="outlined-select-fruits"
          select
          label="Select"
          defaultValue=""
          helperText="Select your favorite fruits"
        
      
        >
          {currencies.map((option) => (
            <MenuItem key={option.value}  value={option.value} onClick={handleClicked} name={option.value}  >
              {option.label} 
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
    <Button variant="outlined" onClick={handleClick} >Submit</Button>
    <h1> {headingText} </h1>
    
    </div>
  );
}
export default D4;