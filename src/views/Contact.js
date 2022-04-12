import React from 'react';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const Contact = () => {
  return (
    <div>
        <header className='headerMobile' >
            <div className='headerbar' >
                <div><CallRoundedIcon  style={{ fontSize:20, color:"#fff" }}  /></div>
                <div style={{ marginLeft:10 }} ><span style={{ fontSize:20, color:"#fff", fontFamily:'century_bold' }} >Contact</span></div>
            </div>
        </header>
        <div className='containCart' style={{ marginTop:-10, backgroundColor:"#fff" }} >
            
        </div>
    </div>
  )
}

export default Contact