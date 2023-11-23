import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector, batch } from "react-redux";
import CartItemProduct from "../components/CartItemProduct";
import { additionCartMontant, formatNumber } from "../functions/General";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import ModalLogin from "../components/ModalLogin";
import {  UPDATE_STOCK_PRODUCT, UPDATE_CART } from "../lib/actions/action_type";
import '../App.css';

const Cart = () => {

  const history=useHistory();
  const dispatch=useDispatch();
  const stock_product=[...useSelector(state => state.product_list)];
  const data_store=[...useSelector(state => state.store_data)];
  const data_user_store=[...useSelector(state => state.list_user_store)];
  const cartData=[...useSelector(state => state.cart_list)];
  const [openModal, setOpenModal]=useState(false);

  const toggleModalDialogue=()=>setOpenModal(!openModal);

  const goToCheckout=()=>{
    if(data_user_store.length>0){
        history.push("/checkout");
    }
    else{
        toggleModalDialogue(); 
    }
   }

   const verifConnected=()=>{
        history.push("/checkout");
   }
  
  const _goBack=()=>history.goBack();

  const increaseProductCart=(id_stock)=>{
    let newCart=cartData.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty+1, price:parseInt(item.prix_vente)*(item.qty+1) }: item);
    let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty+1, isCart:true }: item);
    batch(()=>{
        dispatch({type:UPDATE_CART, payload:newCart});
        dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
    });
  }

  const discreaseProductCart = (id_stock,qty) =>{
    if(qty<=1){
      let newCart=cartData.filter(item=>item.id_stock!=id_stock);
      let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:0, isCart:false }: item);
      batch(()=>{
          dispatch({type:UPDATE_CART, payload:newCart});
          dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
      });
    }
    else if(qty>1){
      let newCart=cartData.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty-1, price:parseInt(item.prix_vente)*(item.qty-1) }: item);
      let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty-1, isSelect:true }: item);
      batch(()=>{
          dispatch({type:UPDATE_CART, payload:newCart});
          dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
      });
    }
  }

  const removeCartProduct=(id_stock)=>{
        let newCart=cartData.filter(item=>item.id_stock!=id_stock);
        let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:0, isCart:false }: item);
        batch(()=>{
            dispatch({type:UPDATE_CART, payload:newCart});
            dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
        });
   }

   const callPhone=()=>{
     window.location.href = `tel:${data_store[0].contact}`;
   }

  return (
        <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>_goBack()}  style={{  marginTop:3 }} ><span><ArrowBackIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Panier</span></div>
            <div  style={{ marginTop:3, position:"relative" }} >
                <span style={{ position:"absolute", top:-5, right:-7,  width:20, height:20, borderRadius:20, backgroundColor:"#f6b229", color:"#fff", fontSize:9, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"century_bold" }} >{cartData.length}</span>
                <ShoppingCartOutlinedIcon  style={{ color:"#222", fontSize:26 }}  />
            </div>
        </div>
        </header>
        <div className='containCart' style={{ marginTop:-15, backgroundColor:"#f5f5f5" }} >
            <div style={{  padding:"5px 20px", marginTop:7  }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:12,  }} >RÉSUMÉ SU PANIER</span></div>
            </div>
            <div style={{ backgroundColor:"#fff", marginLeft:0, marginRight:0, padding:"7px 18px", borderBottom:"solid 1px #ececec", display:"flex", flexDirection:"row", justifyContent:"space-between" }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#282828", fontSize:13,  }} >Sous-total</span></div>
                <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16,  }} >{formatNumber(additionCartMontant(cartData, 0, 'price'))} FCFA</span></div>
            </div>
            <div style={{  padding:"0px 20px", marginTop:7, marginBottom:5  }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:12,  }} >PANIER({cartData.length})</span></div>
            </div>
            {
                cartData.length>0 && cartData.map((item,index)=>{
                    return(
                        <CartItemProduct key={item.id_tab_product} id_tab_product={item.id_tab_product} id_stock={item.id_stock} id_product={item.id_product} unite_vente={item.unite_vente} description={item.description} price={item.price} qty={item.qty} icone_product={item.icone_product} removeCartProduct={removeCartProduct} discreaseProductCart={discreaseProductCart} increaseProductCart={increaseProductCart} store_name={data_store[0].nom} />
                    )
                })
            }
            <div  style={{ position:"fixed", bottom:0, left:0, right:0,  height:60, display:"flex", flexDirection:"row",  alignItems:"center", justifyContent:"center", backgroundColor:"#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", paddingLeft:10, paddingRight:10  }} >
                <div onClick={()=>callPhone()}  style={{ width:45, height:45, borderRadius:4, display:"flex",  alignItems:"center", justifyContent:"center", backgroundColor:"#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"  }} >
                    <PhoneRoundedIcon style={{ color:"#f6b229" }} />
                </div>
                {
                    cartData.length>0 && (
                        <div onClick={goToCheckout} style={{ flex:1, marginLeft:10, height:45, borderRadius:4, display:"flex",  alignItems:"center", justifyContent:"center", backgroundColor:"#f6b229", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"  }} >
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:14,  }} >Commander({formatNumber(additionCartMontant(cartData, 0, 'price'))} FCFA)</span>
                        </div>
                    )
                }
                {
                    cartData.length==0 && (
                        <div  style={{ flex:1, marginLeft:10, height:45, borderRadius:4, display:"flex",  alignItems:"center", justifyContent:"center", backgroundColor:"#f6b22999", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"  }} >
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:14,  }} >Commander({formatNumber(additionCartMontant(cartData, 0, 'price'))} FCFA)</span>
                        </div>
                    )
                }
            </div>
        </div>
        {
            openModal && <ModalLogin  openModal={openModal} toggleModalDialogue={toggleModalDialogue} goToCheckout={verifConnected}  />
        }
        </div>
  )
}

export default Cart