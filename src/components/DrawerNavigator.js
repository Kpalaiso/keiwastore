import React from 'react';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Drawer from '@mui/material/Drawer';
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
                <ShoppingBagIcon style={{ fontSize:40, color:"#fff" }} />
                <div style={{ marginLeft:5 }} >
                    <div><span style={{ fontSize:16, color:"#fff", fontFamily:"century_bold" }}>Boutique Condor</span></div>
                    <div><span style={{ fontSize:10, color:"#fff", fontFamily:"century_regular" }}>Boutique de vente de vêtement de lux</span></div>
                </div>
            </div>
        </div>
        <div className='headerTabBar' style={{padding:"15px 20px" }} >
            <div><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14 }} >Toutes les catégories</span></div>
        </div>
        <div style={{ position:"absolute", top:120, right:0, left:0, height:heightContentDrawer, overflow:"auto", backgroundColor:"#fff" }} >
            <div style={{ padding:"15px 20px" }} >
            <div onClick={()=>closeDrawer()} style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    {/* <div style={{ width:10, height:10, background:"red", borderRadius:10 }} ></div> */}
                    <div style={{ marginLeft:0 }} ><span style={{ fontSize:14, color:"#aaa", fontFamily:"century_regular" }}>Tous les produits</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#aaa", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"15px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    {/* <div style={{ width:10, height:10, background:"red", borderRadius:10 }} ></div> */}
                    <div style={{ marginLeft:0 }} ><span style={{ fontSize:14, color:"#aaa", fontFamily:"century_regular" }}>Fruits mûres</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#aaa", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"15px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    {/* <div style={{ width:10, height:10, background:"red", borderRadius:10 }} ></div> */}
                    <div style={{ marginLeft:0 }} ><span style={{ fontSize:14, color:"#aaa", fontFamily:"century_regular" }}>Vêtement de lux</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#aaa", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"15px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    {/* <div style={{ width:10, height:10, background:"red", borderRadius:10 }} ></div> */}
                    <div style={{ marginLeft:0 }} ><span style={{ fontSize:14, color:"#aaa", fontFamily:"century_regular" }}>Habillement </span></div>
                </div>
                <ChevronRightIcon style={{ color:"#aaa", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"15px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    {/* <div style={{ width:10, height:10, background:"red", borderRadius:10 }} ></div> */}
                    <div style={{ marginLeft:0 }} ><span style={{ fontSize:14, color:"#aaa", fontFamily:"century_regular" }}>Sale de coiffure</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#aaa", fontSize:20 }} />
            </div>
            </div>
            <div style={{ padding:"15px 20px" }} >
            <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  }}  >
                    {/* <div style={{ width:10, height:10, background:"red", borderRadius:10 }} ></div> */}
                    <div style={{ marginLeft:0 }} ><span style={{ fontSize:14, color:"#aaa", fontFamily:"century_regular" }}>Cypress de linge</span></div>
                </div>
                <ChevronRightIcon style={{ color:"#aaa", fontSize:20 }} />
            </div>
            </div>
        </div>
        </div>   
    </Drawer>
    )
}

export default DrawerNavigator;