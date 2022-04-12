import React from 'react';
import { useHistory } from "react-router-dom";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import tomates from "../assets/images/tomates.jpeg";
import '../App.css';

const Cart = () => {

  const history=useHistory();

  const goToCheckout=()=>history.push("/checkout");

  return (
        <div>
        <header className='headerMobile' >
            <div className='headerbar' >
                <div><LocalMallRoundedIcon  style={{ fontSize:20, color:"#fff" }}  /></div>
                <div style={{ marginLeft:10 }} ><span style={{ fontSize:20, color:"#fff", fontFamily:'century_bold' }} >Panier</span></div>
            </div>
        </header>
        <div className='containCart' style={{ marginTop:-10, backgroundColor:"#f2f2f2" }} >
            <div style={{ padding:"10px 10px", marginTop:10, background:"#fff",  }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", borderBottom:"solid 1px #ececec", paddingBottom:10 }} >
                    <div style={{ width:90, height:90, display:"flex", alignItems:"center", justifyContent:"center", background:"#fff" }} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{ marginLeft:10 }} >
                       <div><span style={{ fontFamily:"century_regular", color:"#333", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span></div>
                       <div style={{ marginTop:7, display:"flex", flexDirection:"row", alignItems:"center" }} > 
                            <div style={{ width:30, height:18, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", }} >
                                <StarRateRoundedIcon style={{ color:"#fff", fontSize:16,  }}  />
                            </div>
                            <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Bertrand Store du Bonhneur</span></div>
                        </div>
                       <div style={{ marginTop:5 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >35000 FCFA</span></div> 
                    </div>
                </div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"0px 5px"  }} >
                    <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:10 }} >
                        <DeleteIcon style={{ color:"#10b981", fontSize:18,  }}  />
                        <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_bold", color:"#10b981", fontSize:14,  }} >Retirer</span></div> 
                    </div>
                    <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", }} >
                       <div style={{ padding:'5px 10px', borderRadius:5, border:"solid 1px #ececec", display:"flex", alignItems:"center",}} > <span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Quantité</span> <KeyboardArrowDownIcon  style={{ color:"#aaa", fontSize:16,  }}  /> </div> 
                       <div style={{ marginLeft:15, display:"flex", flexDirection:"row", alignItems:"center",}} > 
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <RemoveIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                        <div style={{ width:40, height:24, backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",  }} >
                        <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >10</span>
                        </div>
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <AddIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <div style={{ padding:"10px 10px", marginTop:10, background:"#fff",  }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", borderBottom:"solid 1px #ececec", paddingBottom:10 }} >
                    <div style={{ width:90, height:90, display:"flex", alignItems:"center", justifyContent:"center", background:"#fff" }} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{ marginLeft:10 }} >
                       <div><span style={{ fontFamily:"century_regular", color:"#333", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span></div>
                       <div style={{ marginTop:7, display:"flex", flexDirection:"row", alignItems:"center" }} > 
                            <div style={{ width:30, height:18, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", }} >
                                <StarRateRoundedIcon style={{ color:"#fff", fontSize:16,  }}  />
                            </div>
                            <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Bertrand Store du Bonhneur</span></div>
                        </div>
                       <div style={{ marginTop:5 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >35000 FCFA</span></div> 
                    </div>
                </div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"0px 5px"  }} >
                    <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:10 }} >
                        <DeleteIcon style={{ color:"#10b981", fontSize:18,  }}  />
                        <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_bold", color:"#10b981", fontSize:14,  }} >Retirer</span></div> 
                    </div>
                    <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", }} >
                       <div style={{ padding:'5px 10px', borderRadius:5, border:"solid 1px #ececec", display:"flex", alignItems:"center",}} > <span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Quantité</span> <KeyboardArrowDownIcon  style={{ color:"#aaa", fontSize:16,  }}  /> </div> 
                       <div style={{ marginLeft:15, display:"flex", flexDirection:"row", alignItems:"center",}} > 
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <RemoveIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                        <div style={{ width:40, height:24, backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",  }} >
                        <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >10</span>
                        </div>
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <AddIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <div style={{ padding:"10px 10px", marginTop:10, background:"#fff",  }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", borderBottom:"solid 1px #ececec", paddingBottom:10 }} >
                    <div style={{ width:90, height:90, display:"flex", alignItems:"center", justifyContent:"center", background:"#fff" }} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{ marginLeft:10 }} >
                       <div><span style={{ fontFamily:"century_regular", color:"#333", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span></div>
                       <div style={{ marginTop:7, display:"flex", flexDirection:"row", alignItems:"center" }} > 
                            <div style={{ width:30, height:18, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center", }} >
                                <StarRateRoundedIcon style={{ color:"#fff", fontSize:16,  }}  />
                            </div>
                            <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Bertrand Store du Bonhneur</span></div>
                        </div>
                       <div style={{ marginTop:5 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >35000 FCFA</span></div> 
                    </div>
                </div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", padding:"0px 5px"  }} >
                    <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingTop:10 }} >
                        <DeleteIcon style={{ color:"#10b981", fontSize:18,  }}  />
                        <div style={{ marginLeft:5 }} ><span style={{ fontFamily:"century_bold", color:"#10b981", fontSize:14,  }} >Retirer</span></div> 
                    </div>
                    <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", }} >
                       <div style={{ padding:'5px 10px', borderRadius:5, border:"solid 1px #ececec", display:"flex", alignItems:"center",}} > <span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Quantité</span> <KeyboardArrowDownIcon  style={{ color:"#aaa", fontSize:16,  }}  /> </div> 
                       <div style={{ marginLeft:15, display:"flex", flexDirection:"row", alignItems:"center",}} > 
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <RemoveIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                        <div style={{ width:40, height:24, backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",  }} >
                        <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >10</span>
                        </div>
                        <div style={{ width:24, height:24, backgroundColor:"#10b981", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <AddIcon style={{ color:"#fff", fontSize:14,  }} />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
            <div onClick={goToCheckout} style={{ position:"fixed", bottom:75, left:15, right:15,  height:45, borderRadius:4, display:"flex",  alignItems:"center", justifyContent:"center", backgroundColor:"#10b981", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"  }} >
                <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:14,  }} >Commander(1500000 FCFA)</span>
            </div>
        </div>
        </div>
  )
}

export default Cart