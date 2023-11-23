import React from 'react';
import moment from "moment";
import { formatNumber } from "../functions/General";

const ItemCommande = ({ number_commande, nb_article, montant, date_enregistrement, goToDetailCommande, id_commande, status }) => {

    const _goToDetailCommande=()=>goToDetailCommande(id_commande, status);
  
    return (
        <div onClick={()=>_goToDetailCommande()} style={{ marginTop:7, position:"relative", marginLeft:5, marginRight:5 }} >
            <div style={{ backgroundColor:"#fff", paddingTop:15, paddingBottom:15, paddingLeft:12, paddingRight:12, borderBottom:"solid 1px #fff", }} >
                <div style={{ display:"flex", flexDirection:"row"}} >
                    {
                        status==1 && (
                            <div  style={{paddingLeft:2, paddingRight:2, paddingBottom:2, height:20, width:60, borderRadius:5, backgroundColor:"#4caf50", marginLeft:0, display:"flex", alignItems:"center", justifyContent:"center" }}  >
                                <div><span style={{fontSize:9, color:"#fff", fontFamily:"Century_bold"}} > Payé </span></div>
                            </div>
                        )
                    }
                    {
                        status==0 && (
                            <div  style={{paddingLeft:2, paddingRight:2, paddingBottom:2, height:20, width:60, borderRadius:5, backgroundColor:"#ddd", marginLeft:0, display:"flex", alignItems:"center", justifyContent:"center" }}  >
                                <div><span style={{fontSize:9, color:"#fff", fontFamily:"Century_bold"}} > en attente </span></div>
                            </div>
                        )
                    }   
                </div>
                <div>
                <div style={{ marginTop:5 }} ><span style={{fontSize:14, fontFamily:"Century_bold", color:"#222" }} ><span style={{fontSize:15, marginTop:5, fontFamily:"Century_bold", color:"#222" }} >Commande </span> #{number_commande} </span></div>
                <div style={{ marginTop:3 }} ><span style={{fontSize:12, fontFamily:"Century_bold", color:"#bbb" }} >Enregistrée le : {moment(parseInt(date_enregistrement)).format("DD-MM-YYYY")} </span></div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center" }} >
                    <div><span style={{fontSize:12, marginTop:3, fontFamily:"Century_bold", color:"#333" }} >Nombres d'article </span></div>
                    <div style={{ width:25, height:17, backgroundColor:"#f6b229", display:"flex", alignItems:"center", justifyContent:"center", marginTop:3, marginLeft:3, borderRadius:10 }} >
                        <span style={{fontSize:9, marginTop:3, fontFamily:"Century_bold", color:"#fff" }} > {nb_article} </span>
                    </div>
                </div>
                <div style={{ marginTop:3, }} ><span style={{fontSize:12, fontFamily:"Century_bold", color:"#333" }} >Total: {formatNumber(montant)} Fcfa</span></div>
                </div>
            </div>
            <div onClick={()=>_goToDetailCommande()} style={{position:"absolute", right:15, bottom:25, width:60, height:24, backgroundColor:"#f6b229", borderRadius:20, display:"flex", alignItems:"center", justifyContent:"center" }} >
                <span style={{color:"#fff", fontFamily:"Century_bold", fontSize:9 }}  >Détails</span>
            </div>
        </div>
  )
}

export default ItemCommande;