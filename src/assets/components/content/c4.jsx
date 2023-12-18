import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


 function valuetext(value) {
    return value
  
}


export default function Con4() {


  const [value, setValue] = useState([20, 800]);
    
  const handleChange = (event, newValue) => {
    setValue(newValue);
    // {props(newValue)} 
    // console.log(value);
  };
  
  return (
    <Box className='w-[20%]'>
        <h2 className='text-center p-3 text-sm md:text-base'>فیلتر بر اساس قیمت</h2>
      <Slider
        getAriaLabel={() => 'Price range'}
        min={0}
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        sx={{color:'#00bf6f'}}
      />
    </Box>
  );
}