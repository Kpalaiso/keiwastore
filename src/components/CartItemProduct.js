import React from 'react';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import DeleteIcon from '@mui/icons-material/Delete';
import { formatNumber } from "../functions/General";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import '../App.css';

const CartItemProduct = ({ id_tab_product, id_stock, id_product, unite_vente, description, price, qty, icone_product, increaseProductCart, discreaseProductCart, removeCartProduct, store_name }) => {

    const increaseCart=()=>increaseProductCart(id_stock);
 
    const discreaseCart=()=>discreaseProductCart(id_stock,qty);

    const removeCart=()=>removeCartProduct(id_stock);
  
    return (
            <div style={{ padding:"10px 10px", marginBottom:10, background:"#fff", marginLeft:5, marginRight:5  }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", borderBottom:"solid 1px #ececec", paddingBottom:10 }} >
                    <div style={{ width:80, height:80, display:"flex", alignItems:"center", justifyContent:"center", background:"#fff" }} >
                        <img src={icone_product} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{ marginLeft:10 }} >
                       <div><span style={{ fontFamily:"century_bold", color:"#282828", fontSize:12,  }} >{description}</span></div>
                       <div style={{ marginTop:7, display:"flex", flexDirection:"row", alignItems:"center" }} > 
                            <div style={{ width:26, height:16, backgroundColor:"#f6b229", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", }} >
                                <StarRateRoundedIcon style={{ color:"#fff", fontSize:14,  }}  />
                            </div>
                            <div style={{ marginLeft:5, marginTop:-3 }} ><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:10,  }} >{store_name}</span></div>
                        </div>
                       <div style={{ marginTop:5 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >{formatNumber(price)} FCFA</span></div> 
                    </div>
                </div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"0px 5px"  }} >
                    <div onClick={()=>removeCart()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:10 }} >
                        <DeleteIcon style={{ color:"#f6b229", fontSize:18,  }}  />
                        <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_bold", color:"#f6b229", fontSize:14,  }} >Supprimer</span></div> 
                    </div>
                    <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", }} >
                       <div style={{ marginLeft:15, display:"flex", flexDirection:"row", alignItems:"center",}} > 
                        <div onClick={()=>discreaseCart()} style={{ width:24, height:24, backgroundColor:"#f6b229", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <RemoveIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                        <div style={{ width:100, height:24, backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",  }} >
                        <span style={{ fontFamily:"century_bold", color:"#333", fontSize:12,  }} >{qty} {unite_vente}</span>
                        </div>
                        <div onClick={()=>increaseCart()} style={{ width:24, height:24, backgroundColor:"#f6b229", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <AddIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
  )
}

export default CartItemProduct;