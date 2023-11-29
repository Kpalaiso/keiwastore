import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import { additionCartMontant, date_time, UUID, generateNumberCommande, getDescription, formatNumber } from "../functions/General";
import { _saveCommande, _saveDetailCommande, _updateCommande } from "../functions/requestCommande";
import { _saveUserWalletAmount } from "../functions/requestStore";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CircularProgress from '@mui/material/CircularProgress';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import EditIcon from '@mui/icons-material/Edit';
import { _loginClientStore, _saveClient } from "../functions/requestClient";
import { _saveFacture } from "../functions/requestFacture";
import { _saveRecette } from "../functions/requestRecette";
import { _saveCaisse } from "../functions/requestCaisse";
import { _saveStockHistorique, _updateStock } from "../functions/requestStock";
import { sendNotification } from "../functions/requestNotification";
import ModalCommande from "../components/ModalCommande";
import ModalMapUser from "../components/ModalMapUser";
import moment from 'moment';
import { UPDATE_STOCK_PRODUCT, UPDATE_CART, GET_USER_STORE, REFRESH_VIEW } from "../lib/actions/action_type";

const CheckOut = () => {
//  const ws = new WebSocket('wss://testapi.keiwa.app/');
  const history=useHistory();
  const dispatch=useDispatch();
  const _list_user_coordinates=useSelector(state => state.list_user_coordinates);
  const stock_product=[...useSelector(state => state.product_list)];
  const cartData=[...useSelector(state => state.cart_list)];
  const data_store=[...useSelector(state => state.store_data)];
  const data_user_store=[...useSelector(state => state.list_user_store)];
  const user_data_infos=[...useSelector(state => state.list_user_infos)];
  const [openModal, setOpenModal]=useState(false);
  const [loading, setLoading]=useState(false);
  const [openMapUser,setOpenMapUser]=useState(false);
  const [id_online_commande, setIdOnlineCommande]=useState(0);
  const [desc_vente, setDescVente]=useState("");
  const [montant_vente, setMontantVente]=useState("");
  const [dataCommande, setDataCommande]=useState(null);
  const [cart_tab, setCartTab]=useState([]);
  const [id_client_online, setIdClientOnline]=useState(0);

  useEffect(()=>{
    data_user_store.length<=0 && history.replace("/");
  }, []);

  const toggleModalMapUser=()=>{
    setOpenMapUser(!openMapUser);
  }

  const getUserAdress=(value)=>{
    console.log(value);
  }

  const getCoordinates=(coords)=>{
    console.log(coords);
  }

  const getCity=(value)=>{
    console.log(value);
  }

  const _goBack=()=>history.goBack();
  
  const toggleModalDialogue=()=>setOpenModal(!openModal);

  const registerCommande=async()=>{
    setLoading(true);
    let client_data= await _loginClientStore(data_user_store[0].id_client_store.toString());
    let _id_client=0;
    if(!client_data){
        let _data_client={type_client:"client",nom:data_user_store[0].nom,numero_telephone:data_user_store[0].numero_telephone,email:data_user_store[0].email,avatar:"",adresse:data_user_store[0].adresse,ville:data_user_store[0].ville,region:"",country:"",latitude:"",longitude:"",id_user:data_store[0].id_user,id_account:0,id_client_local:UUID().toString(),date_enregistrement:date_time(),id_client_store:data_user_store[0].id_client_store.toString()}
        _id_client=await _saveClient(_data_client);
    }
    else{
        _id_client=client_data.id_client;  
    }
    setCartTab(cartData);
    let data_commande={id_user:data_store[0].id_user,id_account:0,montant:additionCartMontant(cartData, 0, 'price'),nb_article: cartData.length.toString(),id_store:data_store[0].id_local_store,number_commande:generateNumberCommande(),date_enregistrement:date_time(),status:0,adresse:data_user_store[0].adresse,commune: data_user_store[0].ville,country:"",id_client:_id_client,nom_client:data_user_store[0].nom,contact_client:data_user_store[0].numero_telephone,id_client_store:data_user_store[0].id_client_store,email:data_user_store[0].email,latitude:data_user_store[0].latitude,longitude:data_user_store[0].longitude}
    let id_commande = await _saveCommande(data_commande);
    let data_notifiction={ title:"Nouvelle commande de votre boutique "+data_store[0].nom,description:"Vous avez reçu une nouvelle commande de "+getDescription(cartData, "description"),token:user_data_infos[0].token_notification,id_user:user_data_infos[0].id_user }
    setIdOnlineCommande(id_commande);
    _saveDetailCommande(cartData, id_commande, data_store[0].id_user, data_user_store[0].id_client_store);
    setDataCommande(data_commande);
    setIdClientOnline(_id_client);
    setDescVente(getDescription(cartData, "description"));
    setMontantVente(additionCartMontant(cartData, 0, 'price'));
    let _listProduct=stock_product.map(item=>{ 
        return { ...item, qty:0, isCart:false }
    });
    batch(()=>{
       dispatch({type:UPDATE_CART, payload:[]});
       dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
    });
    sendNotification(data_notifiction);
    setLoading(false);
    toggleModalDialogue();
  }

  const ressetCmd=()=>{
    toggleModalDialogue();
    history.replace("/")
  }

  const _paiementOrder=(e)=>{
    alert("Le wallet de paiement n'est pas encore disponible. Veuillez patienter la prochaine mise à jour");
    /* 
    e.preventDefault();
    window.CinetPay.setConfig({
        apikey: '12931059005d9dab1c5d9397.08748695',//   YOUR APIKEY
        site_id: '480855',//YOUR_SITE_ID
        notify_url: 'http://mondomaine.com/notify/',
        mode: 'PRODUCTION'
    });
    window.CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: parseInt(montant_vente),
        currency: 'XOF',
        channels: 'ALL',
        description: "Vente de "+desc_vente,   
        customer_name:data_user_store[0].nom,//Le nom du client
        customer_surname:"",//Le prenom du client
        customer_email: data_user_store[0].email,//l'email du client
        customer_phone_number:data_user_store[0].numero_telephone,//l'email du client
        customer_address : data_user_store[0].adresse,//addresse du client
        customer_city: data_user_store[0].ville,// La ville du client
        customer_country : "CM",// le code ISO du pays
        customer_state : "CM",// le code ISO l'état
        customer_zip_code : "06510", 
    });
    window.CinetPay.waitResponse(function(data) {
        if (data.status == "REFUSED") {
            if (alert("Votre paiement a échoué")) {
                window.location.reload();
            }
        } else if (data.status == "ACCEPTED") {
            let _data_amount={id_user:data_store[0].id_user,libelle:"Paiement depuis la boutique",description:"Vente de "+desc_vente,montant:montant_vente,type_operation:1,is_epargne:0,date_enregistrement:(Date.now()).toString()}
            let data_notifiction={ title:"Paiement depuis votre boutique "+data_store[0].nom,description:"Vous avez reçu un paiement d'un montant de "+ montant_vente +" "+ user_data_infos[0].currency +" pour la vente de "+desc_vente,token:user_data_infos[0].token_notification,id_user:user_data_infos[0].id_user }
            _saveUserWalletAmount(_data_amount);
            _updateCommande(id_online_commande,1);
            sendNotification(data_notifiction);
            saveVente();
        }
    });
    window.CinetPay.onError(function(data) {
        console.log(data);
    });  
    */
  }

  const saveVente = () =>{
        let _stock_product=[...stock_product];
        let desc=desc_vente;
        let _montant_vente=montant_vente;
        let _factures={id_facture:UUID(),nom_user:data_user_store[0].nom,tel_user:data_user_store[0].numero_telephone,id_client:id_client_online,id_user:data_store[0].id_user,id_account:0,type:0,montant:_montant_vente,montant_paye:_montant_vente,montant_echeance: "",echeance_paye: "",echeance:"",id_echeance:"",progression:"",remise:"",other_spend:"",tva:"",date_user:date_time(),montant_verse:"0",is_insert:1,is_update:0,operation:'insert',id_facture_online:0,date_enregistrement:date_time(),is_init_credit:0,is_active:1, code_transaction:generateNumberCommande(),tva_montant:"", description:desc, montant_ht:_montant_vente, typeTva:0, tauxRemise:"", commentaire:"",image_code_qr:"", email:data_user_store[0].email };
        let _caisse_infos={id_caisse:UUID(),id_operation: _factures.id_facture,id_user:data_store[0].id_user,id_account:0,nom_user: data_user_store[0].nom,libele:'Vente cash de '+desc,icone_product:'',montant: _factures.montant.toString(),montant_paye:_factures.montant_paye,montant_verse: _factures.montant_verse,id_echeance:0,type_operation:'vente',is_insert:1,is_update:0,operation:'insert',id_caisse_online:0,date_enregistrement:date_time(),is_active:1};
        let _lastTabVentes=[];
        let historiqueData=[];
        let _tabUpdateInfosStock=[];
        let new_quantite=0;
        let new_total_quantity=0;
        let quantite_sortie=0;
        cart_tab.forEach((element, index, arr) => {
            let id_historique_stock=UUID();
                let infosStock=_stock_product.filter(item=>item.id_stock==element.id_stock);
                let data_stock_historique=null;
                if(element.unite!=infosStock[0].unite_achat){
                    new_quantite=Math.ceil((parseFloat(infosStock[0].total_quantity)-parseFloat(element.qty))/parseFloat(infosStock[0].nb_unite_achat));
                    new_total_quantity=parseFloat(infosStock[0].total_quantity)-parseFloat(element.qty);
                    quantite_sortie=parseFloat(infosStock[0].quantite)-new_quantite;
                }
                else if(element.unite==infosStock[0].unite_achat){
                    new_total_quantity=parseFloat(infosStock[0].total_quantity)-(parseFloat(infosStock[0].nb_unite_achat)*parseFloat(element.qty));
                    new_quantite=parseFloat(infosStock[0].quantite)-parseFloat(element.qty);
                    quantite_sortie=parseFloat(element.qty);
                }
                _stock_product=_stock_product.map(item =>
                    item.id_stock == element.id_stock ? { ...item, quantite:new_quantite.toString(), total_quantity:new_total_quantity, montant:(parseInt(infosStock[0].prix_achat)*new_quantite)<=0?"0":(parseInt(infosStock[0].prix_achat)*new_quantite).toString(), is_update:1 } : item
                ); 
                infosStock[0].total_quantity=new_total_quantity;
                infosStock[0].quantite=new_quantite.toString();
                infosStock[0].montant=(parseInt(infosStock[0].prix_achat)*new_quantite)<=0?"0":(parseInt(infosStock[0].prix_achat)*new_quantite).toString();
                infosStock[0].is_update=1;
                infosStock[0].is_new_stock=1;
                _tabUpdateInfosStock.push(infosStock[0]);
                if(quantite_sortie>=1){
                    data_stock_historique={id_stock_historique:id_historique_stock,id_stock:infosStock[0].id_stock,id_user:data_store[0].id_user,id_account:0,id_product:infosStock[0].id_product,nom_product: infosStock[0].nom_product,icone_product: infosStock[0].icone_product,quantite: new_quantite.toString(),quantite_entre: '0',quantite_sortie: quantite_sortie.toString(),unite:infosStock[0].unite_achat,prix_unitaire:infosStock[0].prix_achat,prix_unitaire_entre:'0',prix_unitaire_sortie:infosStock[0].prix_achat,montant: infosStock[0].montant,description:infosStock[0].nom_product,type_stock: 'sortie',date_enregistrement: date_time(),total_quantity: infosStock[0].total_quantity.toString(),other_index: infosStock[0].other_index,is_insert:1,is_update:0,operation: 'insert',id_historique_stock_online:0,is_active: 1};
                    historiqueData.push(data_stock_historique);
                } 
            let data_recette={id_recette:UUID(),prix_unitaire:element.prix_vente,quantite:element.qty,is_credit:0,date_recette:date_time(),unite:element.unite_vente,montant:element.price.toString(),nom_product:element.description,icone_product:element.icone_product?element.icone_product:"",description:element.qty+ " " +  element.unite_vente + " de " + " " + element.description,id_product:element.id_product,id_user:data_store[0].id_user,id_account:0,id_facture:_factures.id_facture,other_index:element.other_index,id_historique:id_historique_stock,is_insert:1,is_update:0,operation:'insert',id_recette_online:0,date_enregistrement:date_time(),is_active:1}
            _lastTabVentes.push(data_recette);
            if (Object.is(arr.length - 1, index)){
                _saveCaisse([_caisse_infos]);
                _saveFacture(_factures);
                _saveRecette(_lastTabVentes);
                _saveStockHistorique(historiqueData);
                _updateStock(_tabUpdateInfosStock);
            }
        });   
    }

    const edituserLocation=(city,adresse,coords)=>{
        let _data_user_store=[...data_user_store];
        _data_user_store[0].adresse=adresse;
        _data_user_store[0].ville=city;
        _data_user_store[0].latitude=coords.lat;
        _data_user_store[0].longitude=coords.lng;
        dispatch({type:GET_USER_STORE, payload:_data_user_store});
    }

  return (
    <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>_goBack()}  style={{  marginTop:3 }} ><span><ArrowBackIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Résumé de la commande</span></div>
            <div  style={{ marginTop:3, position:"relative", width:40 }} >

            </div>
        </div>
        </header>
        {
            data_user_store.length>0 && (
                <>
                <div className='containCart' style={{ marginTop:-15, backgroundColor:"#f5f5f5" }} >
                    <div style={{ marginTop:12, backgroundColor:"#fff", padding:"15px 15px", marginLeft:10, marginRight:10, position:"relative" }} >
                        <div style={{ marginTop:-5, }} ><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:11, }} >Adresse de livraison</span></div>
                        <div style={{ marginTop:3 }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >{data_user_store[0].ville}</span></div>
                        <div style={{ display:"flex", flexDirection:"row", alignItems:"center", marginTop:5, marginLeft:-3 }} >
                            <FmdGoodRoundedIcon  style={{ color:"#f6b229", fontSize:18 }} />
                            <span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:12, marginLeft:2  }} >{data_user_store[0].adresse}</span>
                        </div>
                        <div style={{ display:"flex", flexDirection:"row", alignItems:"center", marginTop:10, marginLeft:-3 }} >
                            <AccessAlarmIcon  style={{ color:"#f6b229", fontSize:18 }} />
                            <span style={{ fontFamily:"century_bold", color:"#333", fontSize:11, marginLeft:2  }} >Commande effectué le {moment(parseInt(data_user_store[0].date_enregistrement)).format("DD-MM-YYYY")}</span>
                        </div>
                        <div onClick={()=>toggleModalMapUser()} style={{ position:"absolute", width:60, height:22, borderRadius:15, background:"#f6b229",right:10, top:10, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center" }}  >
                            <EditIcon  style={{ color:"#fff", fontSize:12 }} />
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:8, marginLeft:2  }} >Modifier</span>
                        </div>
                    </div>
                    <div style={{  padding:"5px 20px", marginTop:5  }}  >
                        <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:11, marginLeft:-3 }} >INFORMATION PERSONNEL</span></div>
                    </div>
                    <div style={{ backgroundColor:"#fff", marginLeft:10, marginRight:10, padding:"15px 15px", borderBottom:"solid 1px #ececec", }}  >
                        <div style={{ marginTop:-5, }} ><span style={{ fontFamily:"century_bold", color:"#282828", fontSize:13,  }} >{data_user_store[0].nom}</span></div>
                        <div style={{ marginTop:3 }} ><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:12,   }} >{data_user_store[0].email}</span></div>
                        <div style={{ marginTop:3 }} ><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:12, marginTop:3 }} >{data_user_store[0].numero_telephone}</span></div>
                    </div>
                    <div style={{  padding:"5px 20px", marginTop:5  }}  >
                        <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:11, marginLeft:-3  }} >LISTE DES PRODUITS</span></div>
                    </div> 
                    <div style={{ backgroundColor:"#fff", marginLeft:10, marginRight:10, padding:"12px 15px", borderBottom:"solid 1px #ececec", }}  >
                        {
                            cartData.length && cartData.map((item,index)=>{
                                return(
                                    <div key={item.id_tab_product} style={{ backgroundColor:"#fff", marginLeft:0, marginRight:0, display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginBottom:7 }}  >
                                        <div style={{ display:"flex", flexDirection:"row", alignItems:"center" }} >
                                        <div><span style={{ fontFamily:"century_bold", color:"#f6b229", fontSize:11,  }} >{item.qty} {item.unite_vente} X</span></div>
                                        <div><span style={{ fontFamily:"century_bold", color:"#333", fontSize:11, marginLeft:10 }} >{item.description}</span></div>
                                        </div>
                                        <div><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:12, marginLeft:20 }} >{formatNumber(item.price)} FCFA</span></div>
                                    </div>
                                )
                            })
                        }
                        <div style={{ backgroundColor:"#fff", marginTop:12, marginLeft:0, marginRight:0, padding:"10px 5px", borderTop:"solid 1px #ececec", display:"flex", flexDirection:"row", justifyContent:"space-between" }}  >
                            <div><span style={{ fontFamily:"century_bold", color:"#282828", fontSize:13,  }} >Total</span></div>
                            <div><span style={{ fontFamily:"century_bold", color:"#f6b229", fontSize:14,  }} > {formatNumber(additionCartMontant(cartData, 0, 'price'))} FCFA</span></div>
                        </div>
                    </div>
                    <div onClick={()=>registerCommande()} style={{ position:"fixed", bottom:0, left:0, right:0,  height:60, display:"flex", flexDirection:"row",  alignItems:"center", justifyContent:"center", backgroundColor:"#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", paddingLeft:10, paddingRight:10  }} >
                        <div  style={{ flex:1, marginLeft:10, height:45, borderRadius:4, display:"flex",  alignItems:"center", justifyContent:"center", backgroundColor:"#f6b229", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"  }} >
                            <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:14,  }} >Valider la commande</span>
                        </div>
                    </div>
                </div>
                {
                    loading && (
                        <div style={{ position:"absolute", top:0, left:0, right:0, bottom:0, backgroundColor:"rgba(255, 255, 255, 0.5)", display:"flex", alignItems:"center", justifyContent:"center" }} >
                            <CircularProgress style={{ color:"#f6b229" }} />
                        </div>
                    )
                }
                {
                    dataCommande && <ModalCommande openModal={openModal} data_commande={dataCommande} toggleModalDialogue={toggleModalDialogue}  ressetCmd={ressetCmd} _paiementOrder={_paiementOrder} />
                }
                {
                    (openMapUser && _list_user_coordinates) && (<ModalMapUser openMapUser={openMapUser} toggleModalMapUser={toggleModalMapUser}  address={data_user_store[0].adresse} _city={data_user_store[0].ville}  getUserAdress={getUserAdress} getCity={getCity} coordinates={{lat:data_user_store[0].latitude,lng:data_user_store[0].longitude}} getCoordinates={getCoordinates} edituserLocation={edituserLocation} />)
                }
                {
                    (openMapUser && !_list_user_coordinates) && (<ModalMapUser openMapUser={openMapUser} toggleModalMapUser={toggleModalMapUser}  address={data_user_store[0].adresse} _city={data_user_store[0].ville}  getUserAdress={getUserAdress} getCity={getCity} coordinates={{lat:5.345317,lng:-4.024429}} getCoordinates={getCoordinates} edituserLocation={edituserLocation} />)
                }
                </>
            )
        }
    </div>
  )
}

const styles = {
    new_inputStyle: {
        display:"flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff",
        borderRadius:0
    },
    inputfield:{
        paddingTop:0,
        paddingBottom:0,
        paddingLeft:7,
        fontSize:13,
        height:40,
        backgroundColor:"#f7f7f7",
        border:"solid 1px #f3f3f3",
        borderRadius:4,
        width:"100%",
        boxSizing:"border-box",
        marginTop:5,
        outline:"none",
        fontFamily:"productSans_Regular"
    },
}

export default CheckOut