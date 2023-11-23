import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { getMinPrice, getMaxPrice } from "../functions/General";

const SliderPrice = ({data_product,checkCategory, editListProduct}) => {

    const [value, setValue] = React.useState([0,0]);

    React.useEffect(()=>{
        setValue([getMinPrice(data_product), getMaxPrice(data_product)]);
    }, [checkCategory])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        editListProduct(newValue);
    };

    const valuetext=(value)=> {
        return `${value}°C`;
    }

  return (
        <React.Fragment>
        <div style={{ marginLeft:15, marginRight:15, marginTop:10 }} >
            <span style={{ fontFamily:"century_regular", color:"#333", fontSize:14,  }} >Prix (FCFA)</span>
        </div>
        <div style={{ marginLeft:15, marginRight:15, marginTop:10 }} >
        <div style={{  display:"flex", flexDirection:"row", alignItems:"center" }} >
            <div style={{ flex:1, height:40, border:"solid 1px #ececec", borderRadius:5, marginRight:7, display:"flex", alignItems:"center", justifyContent:"center" }} >
                <span style={{ fontFamily:"century_regular", color:"#333", fontSize:13,  }} > {value[0]} FCFA </span>
            </div>
            <div style={{ flex:1, height:40,  border:"solid 1px #ececec", borderRadius:5, marginLeft:7, display:"flex", alignItems:"center", justifyContent:"center" }} >
                <span style={{ fontFamily:"century_regular", color:"#333", fontSize:13,  }} > {value[1]} FCFA </span>
            </div>
        </div>
        <div style={{ marginLeft:10, marginRight:10 }}  >
        <Box >
        <Slider
            getAriaLabel={() => 'Modification du prix'}
            defaultValue={getMaxPrice(data_product)}
            min={getMinPrice(data_product)}
            step={100}
            max={getMaxPrice(data_product)}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{
                color: 'rgb(246, 178, 41)',
                '& .MuiSlider-thumb': {
                    height: 24,
                    width: 24,
                },
                '& .MuiSlider-track': {
                    height: 2,
                },
            }}
        />
        </Box>
        </div>
        </div>
        </React.Fragment>
  )
}

export default SliderPrice