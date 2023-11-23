import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CloseIcon from '@mui/icons-material/Close';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { UUID, formatNumber } from "../functions/General";
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

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

export default function ModalDetailProduct({ openDetailModal, toggleOpenDetailModal, id_display_product, increaseProductCart, addProductToCart, discreaseProductCart }) {

  const stock_product=[...useSelector(state => state.product_list)];
  let _isRefresh=useSelector(state => state.isRefresh);
  const [detail_product, setDetailProduct] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [openUpdateCart, setOpenUpdateCart] = React.useState(false);
  const [removeCart, setRemoveCart] = React.useState(false);
  useEffect(()=>{
    let data=stock_product.find(item=>item.id_stock==id_display_product);
    setDetailProduct(data);
  }, [_isRefresh]);
  const handleClose = () => toggleOpenDetailModal();

  const addTocart=()=>{
    let product={ id_tab_product:UUID(), id_stock:detail_product.id_stock, id_product:detail_product.id_product, prix_vente:detail_product.prix_vente, description:detail_product.description, quantite:detail_product.quantite, icone_product:detail_product.icone_product, qty:1, price:detail_product.prix_vente, unite_vente:detail_product.unite_vente };
    addProductToCart(product);
    setOpen(true);
}

const _increaseProductCart=()=>{
   increaseProductCart(detail_product.id_stock)
   setOpenUpdateCart(true);
}

const _discreaseProductCart=()=>{
    discreaseProductCart(detail_product.id_stock,detail_product.qty);
    if(detail_product.qty==1){
      setRemoveCart(true);
    }
    else{
     setOpenUpdateCart(true);
    } 
}

const handleCloseUpdate=(event, reason)=>{
    if (reason === 'clickaway') {
        return;
    }
    setOpenUpdateCart(false);
 }

const _handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setOpen(false);
};

const handleCloseCart=(event, reason)=>{
  if (reason === 'clickaway') {
      return;
  }
  setRemoveCart(false);
}

  return (
      <Modal
        open={openDetailModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{ width:"100%" }} >
                {
                    detail_product && (
                        <>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:200}} >
                            <img src={detail_product.icone_product} style={{ width:100, height:100 }}  />
                        </div>
                        <div style={{padding:"3px 17px", }}>
                            <span style={{ fontFamily:"century_bold", color:"#666", fontSize:13,  }} >{detail_product.description}</span> 
                        </div>
                        <div style={{padding:"3px 17px", }}>
                            <span style={{ fontFamily:"century_bold", color:"#222", fontSize:16,  }} >{formatNumber(detail_product.prix_vente)} FCFA</span> 
                        </div>
                        <div style={{padding:"5px 17px",  }}>
                            <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                            <div style={{ padding:'7px 15px', borderRadius:5, border:"solid 1px #ececec", display:"flex", alignItems:"center", marginRight: 7}} > 
                            {
                                parseInt(detail_product.quantite)>0 && (
                                    <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:10,  }} > Disponibilité ({detail_product.quantite+" "+detail_product.unite_vente})</span> 
                                )
                            }
                            {
                                parseInt(detail_product.quantite)==0 && (
                                    <span style={{ fontFamily:"century_bold", color:"#ccc", fontSize:10,   }} > Disponibilité (Stock épuisé) </span> 
                                )
                            }
                            {
                                parseInt(detail_product.quantite)<0 && (
                                    <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:10,   }} > Disponibilité (Illimité) </span> 
                                )
                            }
                            </div> 
                                {
                                !detail_product.isCart && (
                                        <>
                                        {
                                            parseInt(detail_product.quantite)==0 && (
                                                <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", opacity:0.4, borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                                                    <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                                                    <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                                                </div>
                                            )
                                        }
                                        {
                                            parseInt(detail_product.quantite)!=0 && (
                                                <div onClick={addTocart} style={{ width:"100%", height:30, backgroundColor:"#f6b229", opacity:1, borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                                                    <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                                                    <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                                                </div>
                                            )
                                        }
                                        </>
                                    )
                                }
                                {
                                    detail_product.isCart && (
                                        <div style={{ width:"50%", height:30, borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between",  }} >
                                            <div style={{height:30, width:30, borderRadius:5, backgroundColor:"#f6b229", display:"flex", alignItems:"center", justifyContent:"center" }} onClick={()=>_discreaseProductCart()} ><RemoveRoundedIcon style={{ color:"#fff", fontSize:24 }} /></div>
                                            <div><span  style={{ fontFamily:"century_bold", color:"#222", fontSize:12,  }}  >{detail_product.qty} {detail_product.unite_vente}</span></div>
                                            {
                                                (parseInt(detail_product.quantite)>0 && detail_product.qty==parseInt(detail_product.quantite)) ? (
                                                    <div style={{height:30, width:30, borderRadius:5, backgroundColor:"#f6b229", opacity:0.4, display:"flex", alignItems:"center", justifyContent:"center" }}  ><AddRoundedIcon style={{ color:"#fff", fontSize:24 }} /></div>
                                                ):(
                                                    <div style={{height:30, width:30, borderRadius:5, backgroundColor:"#f6b229", display:"flex", alignItems:"center", justifyContent:"center" }}  onClick={()=>_increaseProductCart()}  ><AddRoundedIcon style={{ color:"#fff", fontSize:24 }} /></div>
                                                )
                                            }
                                        </div>
                                    )
                                } 
                            </div>
                        </div>
                        </>
                    )
                }
            </div>
            
            <div onClick={handleClose} style={{ position:"absolute", top:5, right:5, }} ><CloseIcon  style={{ color:"#aaa", fontSize:30 }}  /></div>
            <Snackbar open={open} autoHideDuration={3000} onClose={_handleClose} >
            <Alert onClose={_handleClose} severity="success" sx={{ width: '100%' }}>
            Produit ajouté au panier
            </Alert>
            </Snackbar>
            <Snackbar open={openUpdateCart} autoHideDuration={3000} onClose={handleCloseUpdate} >
                <Alert onClose={handleCloseUpdate} severity="success" sx={{ width: '100%' }}>
                Panier mis à jour avec succès
                </Alert>
            </Snackbar>
            <Snackbar open={removeCart} autoHideDuration={3000} onClose={handleCloseCart} >
                <Alert onClose={handleCloseCart} severity="success" sx={{ width: '100%' }}>
                Produit rétiré avec succès
                </Alert>
            </Snackbar>
        </Box>
      </Modal>
  );
}