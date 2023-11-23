import React from 'react';
import { useSelector } from "react-redux";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import StarIcon from '@mui/icons-material/Star';
import Grid from '@mui/material/Grid';
import { UUID, formatNumber } from "../functions/General";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Rating } from 'react-simple-star-rating'
import '../App.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

const ItemProduct = ({qty,isCart,icone_product,description,prix_vente,quantite,unite_vente,id_stock,id_product,_index,addProductToCart,increaseProductCart,is_new_stock,quatity_security,discreaseProductCart,displayDetailProduct,other_index,_editProductRating, nb_etoile}) => {

  const data_user_store_rating=[...useSelector(state => state.list_user_store_rating)];
  const [open, setOpen] = React.useState(false);
  const [openUpdateCart, setOpenUpdateCart] = React.useState(false);
  const [removeCart, setRemoveCart] = React.useState(false);
   const addTocart=()=>{
       let product={ id_tab_product:UUID(), id_stock:id_stock, id_product:id_product, prix_vente:prix_vente, description:description, quantite:quantite, icone_product:icone_product, qty:1, price:prix_vente, unite_vente:unite_vente, other_index:other_index, is_new_stock:is_new_stock,quatity_security:quatity_security };
       addProductToCart(product);
       setOpen(true);
   }

   const increaseCart=()=>{
       increaseProductCart(id_stock);
       setOpenUpdateCart(true);
   }

   const discreaseCart=()=>{
       discreaseProductCart(id_stock,qty);
       if(qty==1){
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

  const handleClose = (event, reason) => {
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

  const _displayDetailProduct=()=>{
    displayDetailProduct(id_stock)
  }

  const editProductRating=()=>{
    _editProductRating(id_stock);
  }

  return (
      <>
        <Grid item xs={6} >
            <div style={{ borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff",  padding:_index%2==0?"10px 5px 10px 15px":"10px 15px 10px 5px", boxSizing:"border-box"  }} >
                <div onClick={()=>_displayDetailProduct()} style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                    <img src={icone_product} style={{ width:90, height:90, borderRadius:5 }}  />
                </div>
                <div style={{padding:"3px 5px", }}>
                    <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >{description}</span> 
                </div> 
                <div style={{padding:"3px 5px", }}>
                    <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >{formatNumber(prix_vente)} FCFA</span> 
                </div>
                <div style={{padding:"3px 5px", }}>
                    {
                        parseInt(quantite)>0 && (
                            <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} > Disponibilité ({quantite+" "+unite_vente})</span> 
                        )
                    }
                    {
                        parseInt(quantite)==0 && (
                            <span style={{ fontFamily:"century_bold", color:"#ccc", fontSize:11,   }} > Disponibilité (Stock épuisé) </span> 
                        )
                    }
                    {
                        parseInt(quantite)<0 && (
                            <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,   }} > Disponibilité (Illimité) </span> 
                        )
                    }
                </div>
                <div style={{ marginTop:2, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", position:"relative" }} >
                <div style={{ position:"relative" }} >
                    <Rating size={18} initialValue={nb_etoile} />
                    <div style={{ position:"absolute", top:0, left:0, right:0, bottom:0, backgroundColor:"transparent" }} >

                    </div>
                </div>
                </div>
                <div  style={{  display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", }} >
                    <div  style={{  display:"flex", flexDirection:"row", alignItems:"center", }}  >
                        <StarIcon  style={{ fontSize:16, color:"#f6b229" }} />
                        <span style={{ fontFamily:"century_bold", color:"#000", fontSize:9,   }} >({data_user_store_rating.filter(item=>item.id_stock==id_stock).length} avis)</span>
                    </div>
                    <div onClick={()=>editProductRating()}>
                        <span style={{ fontFamily:"century_bold", color:"#000", fontSize:9, textDecoration:"underline"  }} >Noter le produit</span>
                    </div>
                </div>
                <div style={{padding:"10px 5px", }}>
                    {
                        !isCart && (
                            <>
                            {
                                parseInt(quantite)==0 && (
                                    <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", opacity:0.4, borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                                        <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                                        <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                                    </div>
                                )
                            }
                            {
                                parseInt(quantite)!=0 && (
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
                        isCart && (
                            <div style={{ width:"100%", height:30, borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between",  }} >
                                <div style={{height:30, width:30, borderRadius:5, backgroundColor:"#f6b229", display:"flex", alignItems:"center", justifyContent:"center" }} onClick={()=>discreaseCart()} ><RemoveRoundedIcon style={{ color:"#fff", fontSize:24 }} /></div>
                                <div><span  style={{ fontFamily:"century_bold", color:"#222", fontSize:12,  }}  >{qty} {unite_vente}</span></div>
                                {
                                    (parseInt(quantite)>0 && qty==parseInt(quantite)) ? (
                                        <div style={{height:30, width:30, borderRadius:5, backgroundColor:"#f6b229", opacity:0.4, display:"flex", alignItems:"center", justifyContent:"center" }}  ><AddRoundedIcon style={{ color:"#fff", fontSize:24 }} /></div>
                                    ):(
                                        <div style={{height:30, width:30, borderRadius:5, backgroundColor:"#f6b229", display:"flex", alignItems:"center", justifyContent:"center" }}  onClick={()=>increaseCart()}  ><AddRoundedIcon style={{ color:"#fff", fontSize:24 }} /></div>
                                    )
                                }
                            </div>
                        )
                    } 
                </div>
            </div>
        </Grid>  
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose} >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
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
        </>
  )
}

export default ItemProduct