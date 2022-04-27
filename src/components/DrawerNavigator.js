import React from 'react';
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
const DrawerNavigator=({openDrawer, toggleOpenDrawer})=>{

    const closeDrawer=()=>toggleOpenDrawer();
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
                    <div><span style={{ fontSize:16, color:"#222", fontFamily:"century_bold" }}>Boutique Condor</span></div>
                    <div><span style={{ fontSize:10, color:"#bbb", fontFamily:"century_bold" }}>Boutique de vente de vêtement de lux</span></div>
                </div>
            </div>
        </div>
        <div className='headerTabBar' style={{padding:"15px 20px" }} >
            <div><span style={{ fontFamily:"century_bold", color:"#f6b229", fontSize:14 }} >Paramètre</span></div>
        </div>
        <div style={{ position:"absolute", top:120, right:0, left:0, height:heightContentDrawer, overflow:"auto", backgroundColor:"#fff" }} >
            <div style={{ padding:"12px 20px" }} >
            <div onClick={()=>closeDrawer()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <HomeRoundedIcon style={{ color:"#222", fontSize:18 }}  />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:12, color:"#222", fontFamily:"century_bold",  }}>Accueil</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#222", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"12px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <ShoppingCartRoundedIcon  style={{ color:"#222", fontSize:18 }}  />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:12, color:"#222", fontFamily:"century_bold" }}>Mon panier</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#222", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"12px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <AssignmentRoundedIcon style={{ color:"#222", fontSize:18 }}    />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:12, color:"#222", fontFamily:"century_bold" }}>Mes commandes</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#222", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"12px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    <CallRoundedIcon style={{ color:"#222", fontSize:18 }}  />
                    <div style={{ marginLeft:10 }} ><span style={{ fontSize:12, color:"#222", fontFamily:"century_bold" }}>Contact boutique </span></div>
                </div>
                <ChevronRightIcon style={{ color:"#222", fontSize:20 }} />
            </div>
            </div>
        </div>
        </div>   
    </Drawer>
    )
}

export default DrawerNavigator;