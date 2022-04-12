import React from 'react';
import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';

const Account = () => {
  return (
    <div>
        <header className='headerMobile' >
            <div className='headerbar' >
                <div><AssignmentRoundedIcon  style={{ fontSize:20, color:"#fff" }}  /></div>
                <div style={{ marginLeft:10 }} ><span style={{ fontSize:20, color:"#fff", fontFamily:'century_bold' }} >Mes commandes</span></div>
            </div>
        </header>
        <div className='containCart' style={{ marginTop:-10, backgroundColor:"#f2f2f2" }} >
            <div style={{ padding:"10px 10px", marginTop:10, background:"#fff" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", }} >
                    <div style={{ marginLeft:0 }} >
                        <div style={{ width:70, height:20, backgroundColor:"#ccc", borderRadius:4, display:"flex", alignItems:"center", justifyContent:"center" }} > <span style={{ color:"#fff", fontFamily:"century_bold", fontSize:9 }} > En attente </span> </div>
                        <div><span style={{ fontFamily:"century_bold", color:"#333", fontSize:12,  }} >Commande #0987654567</span></div>
                        <div style={{ marginTop:0, display:"flex", flexDirection:"row", alignItems:"center" }} > 
                            <div><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Nombre d'article </span></div>
                            <div> <span style={{ padding:"3px 5px", backgroundColor:"#10b981", borderRadius:4, color:"#fff", fontFamily:"century_bold", fontSize:9, marginLeft:5 }} > 10 </span> </div>
                        </div>
                        <div style={{ marginTop:2 }} > 
                            <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11,  }} >Date: 09-11-2022</span>
                        </div>
                       <div style={{ marginTop:2 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >Total: 35000 FCFA</span></div> 
                    </div>
                </div>
                <div style={{ position:"absolute", top:20, right:10, width:33, height:33, borderRadius:33,  backgroundColor:"#fff", display:"flex", alignItems:"center", justifyContent:"center"  }} >
                    <MoreVertRoundedIcon style={{ color:"#333", fontSize:26,  }}  />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Account