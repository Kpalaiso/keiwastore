import React from 'react';
import {  useSelector } from "react-redux";
import { date_time, UUID, generateNumberCommande, getDescription, formatNumber } from "../functions/General";
import { _saveCommande, _saveDetailCommande, _updateCommande } from "../functions/requestCommande";
import { _saveUserWalletAmount } from "../functions/requestStore"
import { _loginClientStore, _saveClient } from "../functions/requestClient";
import { _saveFacture } from "../functions/requestFacture";
import { _saveRecette } from "../functions/requestRecette";
import { _saveCaisse } from "../functions/requestCaisse";
import { _saveStockHistorique, _updateStock } from "../functions/requestStock";
import { sendNotification } from "../functions/requestNotification";
import Alert from '@mui/material/Alert';
import moment from 'moment';

const Paiement = () => {
    
//    const ws = new WebSocket('wss://testapi.keiwa.app/');
    const data_commande=[...useSelector(state => state.list_commande)];
    const data_detail_commande=[...useSelector(state => state.list_detail_commande)];
    const data_store=[...useSelector(state => state.store_data)];
    const data_user_store=[...useSelector(state => state.list_user_store)];
    const stock_product=[...useSelector(state => state.product_list)];
    const user_data_infos=[...useSelector(state => state.list_user_infos)];

    const paiementOrder=(e)=>{
        e.preventDefault();
        let desc_vente=getDescription(data_detail_commande, "description");
        window.CinetPay.setConfig({
            apikey: '12931059005d9dab1c5d9397.08748695',//   YOUR APIKEY
            site_id: '480855',//YOUR_SITE_ID
            notify_url: 'http://mondomaine.com/notify/',
            mode: 'PRODUCTION'
        });
        window.CinetPay.getCheckout({
            transaction_id: Math.floor(Math.random() * 100000000).toString(),
            amount: parseInt(data_commande[0].montant),
            currency: 'XOF',
            channels: 'ALL',
            description: "Vente de "+desc_vente,   
            //Fournir ces variables pour le paiements par carte bancaire
            customer_name:data_user_store[0].nom,//Le nom du client
            customer_surname:"",//Le prenom du client
            customer_email: data_user_store[0].email,//l'email du client
            customer_phone_number:data_user_store[0].numero_telephone,//l'email du client
            customer_address : data_user_store[0].adresse,//addresse du client
            customer_city: data_user_store[0].ville,// La ville du client
            customer_country : "CM",// le code ISO du pays
            customer_state : "CM",// le code ISO l'état
            customer_zip_code : "06510", // code postal
        });
        window.CinetPay.waitResponse(function(data) {
            if (data.status == "REFUSED") {
                if (alert("Votre paiement a échoué")) {
                    window.location.reload();
                }
            } else if (data.status == "ACCEPTED") {
                let _data_amount={id_user:data_store[0].id_user,libelle:"Paiement depuis la boutique",description:"Vente de "+desc_vente,montant:data_commande[0].montant,type_operation:1,is_epargne:0,date_enregistrement:(Date.now()).toString()}
                let data_notifiction={ title:"Paiement depuis votre boutique "+data_store[0].nom,description:"Vous avez reçu un paiement d'un montant de "+ data_commande[0].montant +" "+ user_data_infos[0].currency +" pour la vente de "+desc_vente,token:user_data_infos[0].token_notification,id_user:user_data_infos[0].id_user }
                _saveUserWalletAmount(_data_amount);
                _updateCommande(data_commande[0].id_commande,1);
                sendNotification(data_notifiction);
                saveVente();
            }
        });
        window.CinetPay.onError(function(data) {
            console.log(data);
        }); 
      }

      const saveVente = () =>{
        let _stock_product=[...stock_product];
        let desc="Vente de "+getDescription(data_detail_commande, "description");;
        let _montant_vente=data_commande[0].montant;
        let _factures={id_facture:UUID(),nom_user:data_user_store[0].nom,tel_user:data_user_store[0].numero_telephone,id_client:data_commande[0].id_client,id_user:data_store[0].id_user,id_account:0,type:0,montant:_montant_vente,montant_paye:_montant_vente,montant_echeance:_montant_vente,echeance_paye: "",echeance:"",id_echeance:"",progression:"",remise:"",other_spend:"",tva:"",date_user:date_time(),montant_verse:"0",is_insert:1,is_update:0,operation:'insert',id_facture_online:0,date_enregistrement:date_time(),is_init_credit:0,is_active:1, code_transaction:generateNumberCommande(),tva_montant:"", description:desc, montant_ht:"", typeTva:0, tauxRemise:"", commentaire:"",image_code_qr:"", email:data_user_store[0].email };
        let _caisse_infos={id_caisse:UUID(),id_operation: _factures.id_facture,id_user:data_store[0].id_user,id_account:0,nom_user: data_user_store[0].nom,libele:'Vente cash de '+desc,icone_product:'',montant: _factures.montant.toString(),montant_paye:_factures.montant_paye,montant_verse: _factures.montant_verse,id_echeance:0,type_operation:'vente',is_insert:1,is_update:0,operation:'insert',id_caisse_online:0,date_enregistrement:date_time(),is_active:1};
        let _lastTabVentes=[];
        let historiqueData=[];
        let _tabUpdateInfosStock=[];
        let new_quantite=0;
        let new_total_quantity=0;
        let quantite_sortie=0;
        data_detail_commande.forEach((element, index, arr) => {
            let id_historique_stock=UUID();
                let infosStock=_stock_product.filter(item=>item.id_stock==element.id_stock);
                let data_stock_historique=null;
                if(element.unite!=infosStock[0].unite_achat){
                    new_quantite=Math.ceil((parseFloat(infosStock[0].total_quantity)-parseFloat(element.quantite))/parseFloat(infosStock[0].nb_unite_achat));
                    new_total_quantity=parseFloat(infosStock[0].total_quantity)-parseFloat(element.quantite);
                    quantite_sortie=parseFloat(infosStock[0].quantite)-new_quantite;
                }
                else if(element.unite==infosStock[0].unite_achat){
                    new_total_quantity=parseFloat(infosStock[0].total_quantity)-(parseFloat(infosStock[0].nb_unite_achat)*parseFloat(element.quantite));
                    new_quantite=parseFloat(infosStock[0].quantite)-parseFloat(element.quantite);
                    quantite_sortie=parseFloat(element.quantite);
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
            let data_recette={id_recette:UUID(),prix_unitaire:element.prix_vente,quantite:element.quantite,is_credit:0,date_recette:date_time(),unite:element.unite,montant:element.prix_vente.toString(),nom_product:element.description,icone_product:element.icone_product?element.icone_product:"",description:element.quantite+ " " +  element.unite + " de " + " " + element.description,id_product:element.id_product,id_user:data_store[0].id_user,id_account:0,id_facture:_factures.id_facture,other_index:element.other_index,id_historique:id_historique_stock,is_insert:1,is_update:0,operation:'insert',id_recette_online:0,date_enregistrement:date_time(),is_active:1}
            _lastTabVentes.push(data_recette);
            if (Object.is(arr.length - 1, index)){
                _saveCaisse([_caisse_infos]);
                _saveFacture(_factures);
                _saveRecette(_lastTabVentes);
                _saveStockHistorique(historiqueData);
                _updateStock(_tabUpdateInfosStock);
                /* setTimeout(() => {
                    ws.send(JSON.stringify({id_user:data_store[0].id_user,event:"reload_all_data" }));
                }, 600); */ 
            }
        });   
    }

  return (
        <div style={{ padding:"10px 10px" }} >
        <Alert severity="success">Félicitations — votre commande a été enregistrer !</Alert>
        <div style={{ textAlign:"center", marginTop:10 }} >
            <div style={{ textAlign:"left", backgroundColor:"#fff", border:"solid 1px #ececec", padding:"10px 15px", marginTop:40 }} >
                <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >Détails de la commande</span></div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#aaa", fontSize:12, fontFamily:"century_bold" }} >Numéro de la commande</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >#{data_commande[0].number_commande}</span></div>
                </div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#aaa", fontSize:12, fontFamily:"century_bold" }} >Montant Total</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >{formatNumber(data_commande[0].montant)} FCFA</span></div>
                </div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#aaa", fontSize:12, fontFamily:"century_bold" }} >Date</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >{moment(parseInt(data_commande[0].date_enregistrement)).format("DD-MM-YYYY")}</span></div>
                </div>
                <div  style={{ marginTop:10 }}  >
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >États de la commande</span></div>
                    <div><span style={{ color:"#333", fontSize:11, fontFamily:"century_bold" }} >Votre commande est en cours de traitement. Vous serez contacter par le propriétaire de la boutique pour plus d'information</span></div>
                </div>
            </div>
            <div onClick={(e)=>paiementOrder(e)} style={{marginTop:15, height:45, backgroundColor:"#4caf50", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer",  }} >
                <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > PROCÉDER AU PAIEMENT </span>
            </div>
        </div>
        </div>
  )
}

export default Paiement