import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import Alert from '@mui/material/Alert';
import Slide from '@mui/material/Slide';
import { formatNumber } from "../functions/General";
import moment from 'moment';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalCommande({openModal,toggleModalDialogue,data_commande,ressetCmd,_paiementOrder}) {

  const handleClose = () => {
    toggleModalDialogue();
  };

  const _ressetCmd=()=>{
    ressetCmd();
  }

  const paiementOrder=(e)=>{
    alert("Cette fonctionnalité n'est pas encore disponible")
  }

  return (
      <Dialog
        fullScreen
        open={openModal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div style={{ padding:"10px 10px" }} >
        <Alert severity="success">Félicitations — votre commande a été enregistrer !</Alert>
        <div style={{ textAlign:"center", marginTop:10 }} >
            <div style={{ textAlign:"left", backgroundColor:"#fff", border:"solid 1px #ececec", padding:"10px 15px", marginTop:40 }} >
                <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >Détails de la commande</span></div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#aaa", fontSize:12, fontFamily:"century_bold" }} >Numéro de la commande</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >#{data_commande.number_commande}</span></div>
                </div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#aaa", fontSize:12, fontFamily:"century_bold" }} >Montant Total</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >{formatNumber(data_commande.montant)} FCFA</span></div>
                </div>
                <div  style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:7 }}  >
                    <div><span style={{ color:"#aaa", fontSize:12, fontFamily:"century_bold" }} >Date</span></div>
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >{moment(parseInt(data_commande.date_enregistrement)).format("DD-MM-YYYY")}</span></div>
                </div>
                <div  style={{ marginTop:10 }}  >
                    <div><span style={{ color:"#333", fontSize:12, fontFamily:"century_bold" }} >États de la commande</span></div>
                    <div><span style={{ color:"#333", fontSize:11, fontFamily:"century_bold" }} >Votre commande est en cours de traitement. Vous serez contacter par le propriétaire de la boutique pour plus d'information</span></div>
                </div>
            </div>
            <div onClick={(e)=>paiementOrder(e)} style={{marginTop:15, height:45, backgroundColor:"#4caf50", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer",  }} >
                <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > PROCÉDER AU PAIEMENT </span>
            </div>
            <div onClick={()=>_ressetCmd()} style={{marginTop:15, height:45, backgroundColor:"#f6b229", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer",  }} >
                <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > RETOUR A L'ACCUEIL </span>
            </div>
        </div>
        </div>
      </Dialog>
  );
}