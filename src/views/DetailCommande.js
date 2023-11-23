import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import { formatNumber } from "../functions/General";
import moment from "moment"
import { _findDetailCommandeById } from "../functions/requestCommande";

const DetailCommande = () => {

  const history=useHistory();
  const location = useLocation();
  const commande=location.state;
  const data_commande=commande._data_commande;
  const [detailCommande, setDetailCommande]=useState([]);
  const [loader, setLoader]=useState(false);

  useEffect( () => {
        async function selectDetailCommandeData(){
        setLoader(true);
        let _data_commande=await _findDetailCommandeById(commande.id_commande);
        setDetailCommande(_data_commande);
        setLoader(false);
    }
    selectDetailCommandeData();
  }, []); 

  const _goBack=()=>history.goBack();

  return (
    <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>_goBack()}  style={{  marginTop:3, marginLeft:-5 }} ><span><ArrowBackIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Détail de la commande</span></div>
            <div  style={{ marginTop:3, position:"relative", width:40 }} >

            </div>
        </div>
        </header>
        <div className='containCart' style={{ marginTop:-12, backgroundColor:"#fff" }} >
            
            <div style={{ backgroundColor:"#fff", paddingTop:10, paddingBottom:12, paddingLeft:12, paddingRight:12, borderBottom:"solid 1px #fff", }} >
                <div style={{ display:"flex", flexDirection:"row"}} >
                    {
                        commande.status==1 && (
                            <div  style={{paddingLeft:2, paddingRight:2, paddingBottom:2, height:20, width:60, borderRadius:5, backgroundColor:"#4caf50", marginLeft:0, display:"flex", alignItems:"center", justifyContent:"center" }}  >
                                <div><span style={{fontSize:9, color:"#fff", fontFamily:"Century_bold"}} > Payé </span></div>
                            </div>
                        )
                    }
                    {
                        commande.status==0 && (
                            <div  style={{paddingLeft:2, paddingRight:2, paddingBottom:2, height:20, width:60, borderRadius:5, backgroundColor:"#ddd", marginLeft:0, display:"flex", alignItems:"center", justifyContent:"center" }}  >
                                <div><span style={{fontSize:9, color:"#fff", fontFamily:"Century_bold"}} > en attente </span></div>
                            </div>
                        )
                    }
                </div>
                <div>
                <div style={{ marginTop:5 }} ><span style={{fontSize:14, fontFamily:"Century_bold", color:"#222" }} ><span style={{fontSize:15, marginTop:5, fontFamily:"Century_bold", color:"#222" }} >Commande </span> #{data_commande.number_commande} </span></div>
                <div style={{ marginTop:3 }} ><span style={{fontSize:12, fontFamily:"Century_bold", color:"#bbb" }} >Enregistrée le : {moment(parseInt(data_commande.date_enregistrement)).format("DD-MM-YYYY")} </span></div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center" }} >
                    <div><span style={{fontSize:12, marginTop:3, fontFamily:"Century_bold", color:"#333" }} >Nombres d'article </span></div>
                    <div style={{ width:25, height:17, backgroundColor:"#f6b229", display:"flex", alignItems:"center", justifyContent:"center", marginTop:3, marginLeft:3, borderRadius:10 }} >
                        <span style={{fontSize:9, marginTop:3, fontFamily:"Century_bold", color:"#fff" }} > {data_commande.nb_article} </span>
                    </div>
                </div>
                <div style={{ marginTop:3, }} ><span style={{fontSize:12, fontFamily:"Century_bold", color:"#333" }} >Total: {formatNumber(data_commande.montant)} Fcfa</span></div>
                </div>
            </div>
            <div style={{  padding:"12px 15px", marginTop:0, marginBottom:5, backgroundColor:"#f5f5f5"  }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:12,  }} >CONTENU DE LA COMMANDE</span></div>
            </div>
            {
                loader ? (
                    <div style={{ display:"flex", width:"100%", alignItems:"center", justifyContent:'center' }} >
                        <CircularProgress style={{ color:"#f6b229", marginTop:100 }} />
                    </div>
                ):(
                <div>
                    {
                        detailCommande.length>0 && detailCommande.sort((a, b)=>(b.date_enregistrement-a.date_enregistrement)).map((item,index)=>{
                            return(
                                <div key={index} style={{ padding:"5px 10px", marginTop:5, background:"#fff", marginLeft:5, marginRight:5, borderBottom:"solid 1px #ececec",  }} >
                                    <div style={{ display:"flex", flexDirection:"row", alignItems:"center",  paddingBottom:10 }} >
                                        <div style={{ width:80, height:80, display:"flex", alignItems:"center", justifyContent:"center", background:"#fff" }} >
                                            <img src={item.icone_product} style={{ width:70, height:70 }}  />
                                        </div>
                                        <div style={{ marginLeft:10 }} >
                                        <div><span style={{ fontFamily:"century_bold", color:"#282828", fontSize:12,  }} >{item.description}</span></div>
                                        <div style={{ marginTop:3, display:"flex", flexDirection:"row", alignItems:"center" }} > 
                                                <div style={{ marginLeft:3 }} ><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:10,  }} >Quantité: 1</span></div>
                                            </div>
                                        <div style={{ marginTop:3 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >{formatNumber(item.montant)} FCFA</span></div> 
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                )
            }

        </div>
    </div>
  )
}

export default DetailCommande;