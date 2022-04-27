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
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../App.css';

const Home = () => {

  const [openDrawer, setOpenDrawer]=useState(false);
  const [openDetailModal, setOpenDetailModal]=useState(false);

  const toggleOpenDrawer=()=>setOpenDrawer(!openDrawer);
  const toggleOpenDetailModal=()=>setOpenDetailModal(!openDetailModal);

  return (
    <div>
        <header className='headerMobile' >
            <div className='searchNavBar' >
                <div onClick={()=>toggleOpenDrawer()} style={{     marginTop:3 }} ><span><MenuIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
                <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Boutique Intel</span></div>
                <div style={{     marginTop:3, position:"relative" }} >
                    <span style={{ position:"absolute", top:-5, right:-7,  width:20, height:20, borderRadius:20, backgroundColor:"#f6b229", color:"#fff", fontSize:9, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"century_bold" }} >100</span>
                    <ShoppingCartOutlinedIcon  style={{ color:"#222", fontSize:26 }}  />
                </div>
            </div>
            <div className='headerNavTabBar' >
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f6b229", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#fff", whiteSpace:"nowrap" }}  > Tout </span></div>
                </div>
                <div  style={{   padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{  fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Fruits </span></div>
                </div>
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Légumes </span></div>
                </div>
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Chemise </span></div>
                </div>
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > T-shirt </span></div>
                </div><div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Pantalon </span></div>
                </div>
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Culotte </span></div>
                </div>
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Tout zxzx </span></div>
                </div><div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Billet </span></div>
                </div>
                <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Tout </span></div>
                </div><div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                    <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > Tout </span></div>
                </div>
            </div> 
            <div style={{  position:"relative", marginLeft:15, marginRight:15 }} >
                <Search size={18} style={{ position:"absolute", right:10, top:12, color:"#bbb" }}  />
                <input
                    type="text"
                    style={{border: "1px solid #fff",background: "#f2f2f2",width: "100%",height:42,boxSizing: "border-box",borderRadius:20,color: "#333",fontSize:12,outline: "none",overflow: "hidden",zIndex: 1,paddingRight:35,paddingLeft:15, fontFamily:"century_bold" }}
                    placeholder="Rechercher un produit..."
                />
            </div>
        </header>
         <div className='containProduct' >
        <Grid container spacing={0}>
            <Grid item xs={6} >
            <div style={{  borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff", height:290, padding:"10px 10px"  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div> 
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Disponibilité (5 unités)</span> 
                    </div>
                    <div style={{padding:"10px 5px", }}>
                        <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                            <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} >
            <div style={{  borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff", height:290, padding:"10px 10px"  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div> 
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Disponibilité (5 unités)</span> 
                    </div>
                    <div style={{padding:"10px 5px", }}>
                        <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                            <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} >
            <div style={{  borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff", height:290, padding:"10px 10px"  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div> 
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Disponibilité (5 unités)</span> 
                    </div>
                    <div style={{padding:"10px 5px", }}>
                        <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                            <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} >
            <div style={{  borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff", height:290, padding:"10px 10px"  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div> 
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Disponibilité (5 unités)</span> 
                    </div>
                    <div style={{padding:"10px 5px", }}>
                        <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                            <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} >
            <div style={{  borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff", height:290, padding:"10px 10px"  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div> 
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Disponibilité (5 unités)</span> 
                    </div>
                    <div style={{padding:"10px 5px", }}>
                        <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                            <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
            <Grid item xs={6} >
            <div style={{  borderBottom:"solid 1px #fff", borderRight:"solid 1px #fff", height:290, padding:"10px 10px"  }} >
                    <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%", backgroundColor:"#f5f5f5", height:150, borderRadius:15}} >
                        <img src={tomates} style={{ width:80, height:80 }}  />
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#666", fontSize:12,  }} >Kissan Jam - Mixed Fruit</span> 
                    </div> 
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#222", fontSize:14,  }} >5000 FCFA</span> 
                    </div>
                    <div style={{padding:"3px 5px", }}>
                        <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Disponibilité (5 unités)</span> 
                    </div>
                    <div style={{padding:"10px 5px", }}>
                        <div style={{ width:"100%", height:30, backgroundColor:"#f6b229", borderRadius:4, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", border:"solid 1px #f6b229" }} >
                            <ShoppingBasketIcon  style={{ color:"#fff", fontSize:14, marginRight:3 }}  />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} >ACHETER</span>
                        </div> 
                    </div>
                </div>
            </Grid>
        </Grid>
        </div> 
         <DrawerNavigator openDrawer={openDrawer} toggleOpenDrawer={toggleOpenDrawer} />
      {/*  <ModalDetailProduct openDetailModal={openDetailModal} toggleOpenDetailModal={toggleOpenDetailModal}  /> */}
    </div>
  )
}

export default Home