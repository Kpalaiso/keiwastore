import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ItemCommande from "../components/ItemCommande";
import CircularProgress from '@mui/material/CircularProgress';
import { _findCommandeByClientStoreId } from "../functions/requestCommande";

const Commande = () => {

  const history=useHistory();
  const data_user_store=[...useSelector(state => state.list_user_store)];
  const [dataCommande, setDataCommande]=useState([]);
  const [loader, setLoader]=useState(false);
  useEffect( () => {
    async function selectAllCommandeData(){
        setLoader(true);
        let _data_commande=await _findCommandeByClientStoreId(data_user_store[0].id_client_store.toString());
        setDataCommande(_data_commande);
        setLoader(false);
    }
    selectAllCommandeData();
    }, []); 

    const _goBack=()=>history.goBack();

    const goToDetailCommande=(id_commande, status)=>{
        let _data_commande=dataCommande.find(item=>id_commande==item.id_commande);
        history.push("/detail_commande", { id_commande, _data_commande, status });
    }

  return (
    <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>_goBack()}  style={{  marginTop:3, marginLeft:-5 }} ><span><ArrowBackIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Mes commandes</span></div>
            <div  style={{ marginTop:3, position:"relative", width:40 }} >

            </div>
        </div>
        </header>
        <div className='containCart' style={{ marginTop:-12, backgroundColor:"#f5f5f5" }} >
            {
                loader ? (
                    <div style={{ display:"flex", height:100+"vh", width:"100%", alignItems:"center", justifyContent:'center' }} >
                        <CircularProgress style={{ color:"#f6b229", marginTop:-100 }} />
                    </div>
                ):(
                <div>
                    {
                        dataCommande.length>0 && dataCommande.sort((a, b)=>(b.date_enregistrement-a.date_enregistrement)).map((item,index)=>{
                            return(
                                <ItemCommande key={item.id_commande} status={item.status} id_commande={item.id_commande} number_commande={item.number_commande} nb_article={item.nb_article} montant={item.montant} date_enregistrement={item.date_enregistrement} goToDetailCommande={goToDetailCommande} />
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

export default Commande;