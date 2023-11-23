import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import CloseIcon from '@mui/icons-material/Close';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Rating } from 'react-simple-star-rating'
import { UUID } from "../functions/General";
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

export default function ModalRating({ openDetailModalRating, toggleOpenDetailModalRating, id_display_product, _addProductRating, editProductRating }) {

  const stock_product=[...useSelector(state => state.product_list)];
  const data_user_store=[...useSelector(state => state.list_user_store)];
  const data_user_store_rating=[...useSelector(state => state.list_user_store_rating)];
  let _isRefresh=useSelector(state => state.isRefresh);
  const [detail_product, setDetailProduct] = useState(null);
  const [rating, setRating] = React.useState(null);
  const [tabRating, setTabRating] = React.useState([]);
  useEffect(()=>{
    let data=stock_product.find(item=>item.id_stock==id_display_product);
    let tabEtoile=data_user_store_rating.filter(item=> item.id_stock==id_display_product && item.id_client_store==data_user_store[0].id_client_store)
    setRating(data.nb_etoite);
    setDetailProduct(data);
    setRating(tabEtoile.length>0?tabEtoile[0].nb_etoile:0);
    setTabRating(tabEtoile);
  }, [_isRefresh, data_user_store_rating.length]);

  const handleClose = () => toggleOpenDetailModalRating();

  const handleRating = (rate) => {
    setRating(rate)
  }

  const _rateProduct=()=>{
    _addProductRating(rating, detail_product.id_stock);
    toggleOpenDetailModalRating();
  }

  const _editProductRating=()=>{
    editProductRating(tabRating[0].id_product_rating,rating,detail_product.id_stock);
    toggleOpenDetailModalRating();
  }


  return (
      <Modal
        open={openDetailModalRating}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div style={{ width:"100%" }} >
                {
                    detail_product && (
                        <>
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:140}} >
                            <img src={detail_product.icone_product} style={{ width:110, height:110 }}  />
                        </div>
                        <div style={{padding:"3px 17px", display:"flex", alignItems:"center", justifyContent:"center", }}>
                            <span style={{ fontFamily:"century_bold", color:"#666", fontSize:13,  }} >{detail_product.description}</span> 
                        </div>
                        {
                          (rating && rating>0) ? (
                            <div style={{padding:"3px 17px", display:"flex", alignItems:"center", justifyContent:"center", marginTop:5 }}>
                              <Rating onClick={handleRating} initialValue={rating}  size={22}  />
                            </div>
                          ):(
                            <div style={{padding:"3px 17px", display:"flex", alignItems:"center", justifyContent:"center", marginTop:5 }}>
                              <Rating onClick={handleRating} initialValue={0}  size={22}  />
                            </div>
                          )
                        }
                        {
                          (tabRating.length>0) ? (
                            <div onClick={()=>_editProductRating()}  style={{ width:"80%", height:30, backgroundColor:"#f6b229", opacity:1, borderRadius:4, display:"flex", margin:"10px auto", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229", marginTop:10 }} >
                              <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >MODIFIER VOTRE NOTE (déjà noté)</span>
                            </div>
                          ):(
                            <div  onClick={()=>_rateProduct()}  style={{ width:"80%", height:30, backgroundColor:"#f6b229", opacity:1, borderRadius:4, display:"flex", margin:"10px auto", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229", marginTop:10 }} >
                              <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >VALIDER LA NOTE</span>
                            </div>
                          )
                        }
                        </>
                    )
                }
            </div>
            
            <div onClick={handleClose} style={{ position:"absolute", top:5, right:5, }} ><CloseIcon  style={{ color:"#aaa", fontSize:30 }}  /></div>
            {/* <Snackbar open={open} autoHideDuration={3000} onClose={_handleClose} >
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
            </Snackbar> */}
        </Box>
      </Modal>
  );
}