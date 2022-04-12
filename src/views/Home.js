import React, { useState } from 'react';
import { Search } from "react-feather";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import DrawerNavigator from "../components/DrawerNavigator";
import ModalDetailProduct from "../components/ModalDetailProduct";
import Grid from '@mui/material/Grid';
import tomates from "../assets/images/tomates.jpeg";
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import '../App.css';

const Home = () => {

  const [openDrawer, setOpenDrawer]=useState(false);
  const [openDetailModal, setOpenDetailModal]=useState(false);

  const toggleOpenDrawer=()=>setOpenDrawer(!openDrawer);
  const toggleOpenDetailModal=()=>setOpenDetailModal(!openDetailModal);

  return (
    <div>
        <header className='headerMobile' >
            <div className='searchBar' >
            <div style={{ width:"94%", position:"relative",  }} >
            <Search size={18} style={{ position:"absolute", right:10, top:10, color:"#bbb" }}  />
            <input
                type="text"
                style={{border: "1px solid #fff",background: "#f2f2f2",width: "100%",height:40,boxSizing: "border-box",borderRadius:7,color: "#333",fontSize:12,outline: "none",overflow: "hidden",zIndex: 1,paddingRight:35,paddingLeft:15, fontFamily:"century_regular" }}
                placeholder="Rechercher un produit..."
            />
            </div>
            </div>
            <div className='headerTabBar' >
                <div><span style={{ fontFamily:"century_bold", color:"#333", fontSize:13 }} >Tous les produits</span></div>
                <div onClick={()=>toggleOpenDrawer()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", width:60, height:30, backgroundColor:"#fff", borderRadius:4 }} >
                    <FilterListRoundedIcon  style={{ fontSize:12, color:"#333", marginRight:3 }}  />
                    <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >Filtrer</span>
                </div>
            </div>
        </header>
        <div className='containProduct' >
        <Grid container spacing={0}>
            <Grid item xs={6}>
                <div style={{ width:"100%", borderBottom:"solid 1px #ececec", borderRight:"solid 1px #ececec", height:230,  }} >
                    <div onClick={()=>toggleOpenDetailModal()} style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:120}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_regular", color:"#333", fontSize:11,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"5px 17px",  }}>
                        <div style={{ width:"100%", height:34, backgroundColor:"#fff", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #ececec" }} >
                            <ShoppingBasketIcon  style={{ color:"#333", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ width:"100%", borderBottom:"solid 1px #ececec", borderRight:"solid 1px #ececec", height:230,  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:120}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_regular", color:"#333", fontSize:11,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"5px 17px",  }}>
                        <div style={{ width:"100%", height:34, backgroundColor:"#fff", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #ececec" }} >
                            <ShoppingBasketIcon  style={{ color:"#333", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ width:"100%", borderBottom:"solid 1px #ececec", borderRight:"solid 1px #ececec", height:230,  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:120}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_regular", color:"#333", fontSize:11,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"5px 17px",  }}>
                        <div style={{ paddingTop:10, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                        <div style={{ padding:'5px 10px', borderRadius:5, border:"solid 1px #ececec", display:"flex", alignItems:"center",}} > <span style={{ fontFamily:"century_regular", color:"#aaa", fontSize:11,  }} >Unité(s)</span> <KeyboardArrowDownIcon  style={{ color:"#aaa", fontSize:16,  }}  /> </div> 
                        <div style={{ marginLeft:10, display:"flex", flexDirection:"row", alignItems:"center",}} > 
                            <div style={{ width:24, height:24, backgroundColor:"#333", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                                <RemoveIcon style={{ color:"#fff", fontSize:14,  }} />
                            </div>
                            <div style={{ width:30, height:24, backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center",  }} >
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >10</span>
                            </div>
                            <div style={{ width:24, height:24, backgroundColor:"#333", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center",  }} >
                                <AddIcon style={{ color:"#fff", fontSize:14,  }} />
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ width:"100%", borderBottom:"solid 1px #ececec", borderRight:"solid 1px #ececec", height:230,  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:120}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_regular", color:"#333", fontSize:11,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"5px 17px",  }}>
                        <div style={{ width:"100%", height:34, backgroundColor:"#fff", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #ececec" }} >
                            <ShoppingBasketIcon  style={{ color:"#333", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ width:"100%", borderBottom:"solid 1px #ececec", borderRight:"solid 1px #ececec", height:230,  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:120}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_regular", color:"#333", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:15,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"5px 17px",  }}>
                        <div style={{ width:"100%", height:34, backgroundColor:"#fff", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #ececec" }} >
                            <ShoppingBasketIcon  style={{ color:"#333", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6}>
                <div style={{ width:"100%", borderBottom:"solid 1px #ececec", borderRight:"solid 1px #ececec", height:230,  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", height:120}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_regular", color:"#333", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div>
                    <div style={{padding:"3px 17px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:15,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"5px 17px",  }}>
                        <div style={{ width:"100%", height:34, backgroundColor:"#fff", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #ececec" }} >
                            <ShoppingBasketIcon  style={{ color:"#333", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
        </Grid>
        </div>
        <DrawerNavigator openDrawer={openDrawer} toggleOpenDrawer={toggleOpenDrawer} />
        <ModalDetailProduct openDetailModal={openDetailModal} toggleOpenDetailModal={toggleOpenDetailModal}  />
    </div>
  )
}

export default Home