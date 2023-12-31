import React from 'react';
import { useSelector } from "react-redux";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Drawer from '@mui/material/Drawer';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import '../App.css';

const drawerWidth = window.innerWidth-60;
const heightContentDrawer=window.innerHeight-120;
const DrawerNavigator=({openDrawer, toggleOpenDrawer, goToDrawerCart, goToDrawerOrder, goToDrawerContact})=>{

    const data_store=[...useSelector(state => state.store_data)];

    const closeDrawer=()=>toggleOpenDrawer();

    const _goToDrawerCart=()=>goToDrawerCart();

    const _goToDrawerOrder=()=>goToDrawerOrder();

    const _goToDrawerContact=()=>goToDrawerContact()

    return (
    <Drawer
        sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
        },
        }}
        anchor="left"
        open={openDrawer}
        onClose={closeDrawer}
    >
        <div style={{ position:"relative" }} >
        <div className='headerDrawerBar' >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", }} >
                <ShoppingBagIcon style={{ fontSize:40, color:"#f6b229" }} />
                <div style={{ marginLeft:5 }} >
                    <div><span style={{ fontSize:16, color:"#282828", fontFamily:"century_bold" }}>{data_store[0].nom}</span></div>
                    <div><span style={{ fontSize:10, color:"#bbb", fontFamily:"century_bold" }}>{data_store[0].description.substring(0,45)}</span></div>
                </div>
            </div>
        </div>
        <div className='headerTabBar' style={{padding:"15px 20px", borderBottom:"solid 1px #ececec", borderTop:"solid 1px #ececec" }} >
            <div><span style={{ fontFamily:"century_bold", color:"#f6b229", fontSize:15 }} >Menu principale</span></div>
        </div>
        <div style={{ position:"absolute", top:120, right:0, left:0, height:heightContentDrawer, overflow:"auto", backgroundColor:"#fff" }} >
            <div style={{ padding:"12px 20px" }} >
            <div onClick={()=>closeDrawer()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <HomeRoundedIcon style={{ color:"#282828", fontSize:15 }}  />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:13, color:"#282828", fontFamily:"century_bold",  }}>Accueil</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#282828", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"12px 20px" }} >
            <div onClick={()=>_goToDrawerCart()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <ShoppingCartRoundedIcon  style={{ color:"#282828", fontSize:15 }}  />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:13, color:"#282828", fontFamily:"century_bold" }}>Mon panier</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#282828", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"12px 20px" }} >
            <div onClick={()=>goToDrawerOrder()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <AssignmentRoundedIcon style={{ color:"#282828", fontSize:15 }}    />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:13, color:"#282828", fontFamily:"century_bold" }}>Mes commandes</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#282828", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"12px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div onClick={()=>_goToDrawerContact()} style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <CallRoundedIcon style={{ color:"#282828", fontSize:15 }}  />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:13, color:"#282828", fontFamily:"century_bold" }}>Contact boutique </span></div>
                </div>
                <ChevronRightIcon style={{ color:"#282828", fontSize:20 }} />
            </div>
            </div>
        </div>
        </div>   
    </Drawer>
    )
}

export default DrawerNavigator;