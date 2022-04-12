import * as React from 'react';
import Box from '@mui/material/Box';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import tomates from "../assets/images/tomates.jpeg";
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  outline:"none",
  transform: 'translate(-50%, -50%)',
  width: window.innerWidth-60,
  bgcolor: 'background.paper',
  border: '1px solid #fff',
  boxShadow: 24,
  p: 2,
};

export default function ModalDetailProduct({ openDetailModal, toggleOpenDetailModal }) {

  const handleClose = () => toggleOpenDetailModal();

  return (
      <Modal
        open={openDetailModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{ width:"100%" }} >
                <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:200}} >
                    <img src={tomates} style={{ width:100, height:100 }}  />
                </div>
                <div style={{padding:"3px 17px", }}>
                    <span style={{ fontFamily:"century_regular", color:"#333", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                </div>
                <div style={{padding:"3px 17px", }}>
                    <span style={{ fontFamily:"century_bold", color:"#222", fontSize:15,  }} >5000 FCFA</span> 
                </div>
                <div style={{padding:"5px 17px",  }}>
                    <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                    <div style={{ padding:'5px 10px', borderRadius:5, border:"solid 1px #ececec", display:"flex", alignItems:"center",}} > <span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Unité(s)</span> <KeyboardArrowDownIcon  style={{ color:"#aaa", fontSize:16,  }}  /> </div> 
                    <div style={{ marginLeft:10, display:"flex", flexDirection:"row", alignItems:"center",}} > 
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <RemoveIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                        <div style={{ width:30, height:24, backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",  }} >
                        <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >10</span>
                        </div>
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <AddIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                    </div>
                    </div>
                </div>
                {/* <div style={{padding:"5px 17px",  }}>
                    <div style={{ width:"100%", height:34, backgroundColor:"#fff", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #ececec" }} >
                        <ShoppingBasketIcon  style={{ color:"#10b981", fontSize:14, marginRight:3 }}  />
                        <span style={{ fontFamily:"century_bold", color:"#10b981", fontSize:11,  }} >ACHETER</span>
                    </div> 
                </div> */}
            </div>
            <div onClick={handleClose} style={{ position:"absolute", top:5, right:5, }} ><CloseIcon  style={{ color:"#aaa", fontSize:30 }}  /></div>
        </Box>
      </Modal>
  );
}