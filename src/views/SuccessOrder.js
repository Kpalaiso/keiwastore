import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

const heightWindow=window.innerHeight;
const widthWindow=window.innerWidth;
const SuccessOrder = () => {
  return (
    <div style={{ display:"flex", flex:1, width:"100%", height:heightWindow, alignItems:"center", justifyContent:"center", background:"#fff" }} >
        <div style={{ textAlign:"center", marginTop:-80 }} >
            <CheckCircleIcon  style={{ fontSize:100, color:"#10b981"  }}  />
            <div style={{ marginTop:5, textAlign:"center" }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:18, }} >Félicitation !</span></div>
            <div style={{ textAlign:"left", backgroundColor:"#fff", border:"solid 1px #ececec", width:widthWindow-60, padding:"10px 15px", marginTop:40 }} >
                <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >Détails de la commande</span></div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_regular" }} >Numéro de la commande</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >#098765298</span></div>
                </div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_regular" }} >Montant Total</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >15000 FCFA</span></div>
                </div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_regular" }} >Date</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >10-03-2020</span></div>
                </div>
                <div  style={{ marginTop:10 }}  >
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >Bon de commande</span></div>
                    <div><span style={{ color:"#333", fontSize:11, fontFamily:"century_bold" }} >Vous pouvez télécharger votre bon de livraison en cliquant sur le boutton ci-déssous</span></div>
                </div>
            </div>
            <div style={{marginTop:15, height:45, backgroundColor:"#10b981", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer",  }} >
                <CloudDownloadIcon style={{ color:"#fff", fontSize:16, marginRight:7 }} />
                <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > Télécharger </span>
            </div>
        </div>
    </div>
  )
}

export default SuccessOrder;