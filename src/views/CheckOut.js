import React from 'react';
import { useHistory } from "react-router-dom";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CheckOut = () => {

  const history=useHistory();

  const goBack=()=>history.goBack();

  const validOrder=()=>history.push("/sussess_order")

  return (
    <div>
        <header className='headerMobile' >
            <div className='headerbar' style={{ paddingLeft:5, paddingRight:5 }}  >
                <span onClick={goBack}  ><KeyboardArrowLeftIcon  style={{ fontSize:30, color:"#fff" }}  /></span>
                <div style={{ marginLeft:10 }} ><span style={{ fontSize:18, color:"#fff", fontFamily:'century_bold' }} >Résumé de la commande</span></div>
            </div>
        </header>
        <div className='containCart' style={{ marginTop:-10 }} >
            <div style={{ backgroundColor:"#fff", marginLeft:0, marginRight:0, padding:"12px 15px", borderBottom:"solid 1px #ececec" }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#aaa", fontSize:12,  }} >Montant Total</span></div>
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"space-between", marginTop:3 }} >
                    <div>
                    <span style={{ fontFamily:"century_bold", color:"#333", fontSize:14,  }} >3500 FCFA</span>
                    </div>
                    <div>
                        <span style={{ fontFamily:"century_bold", color:"#10b981", fontSize:12, textDecoration:"underline"  }} >Détails</span>
                    </div>
                </div>
            </div>
                <div style={{position:"relative"}}  >
                <div style={{ padding:"10px 15px", }} ><span style={{ fontFamily:"century_bold", color:"#333", fontSize:13,  }} >Informations complémentaires</span></div>
                    <div style={{marginTop:10, padding:"0px 15px" }}>
                        <div>
                            <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Nom et prénom </span>
                        </div>  
                        <input
                            type="text"
                            className="_inputRegisterVente"
                            placeholder=""      
                            style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                        //    onChange={props.handleChange("nom_admin")}
                        //    onBlur={props.handleBlur("nom_admin")}
                        //    value={props.values.nom_admin.toLocaleUpperCase()}
                        />
                                
                    </div>
                    <div style={{marginTop:10, padding:"0px 15px" }}>
                        <div>
                            <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Contact </span>
                        </div> 
                        <div style={{ position:"relative" }} > 
                        <div style={{ position:"absolute", left:0, top:5, height:38, width:50, borderRadius:"4px 0px 0px 4px", background:"#fff", display:"flex", alignItems:"center", justifyContent:"center", border:"solid 1px #f3f3f3", }} >
                            <span style={{ color:"#666", fontSize:12, fontFamily:"century_bold" }} >+225</span>          
                        </div> 
                        <input
                            type="text"
                            className="_inputRegisterVente"
                            placeholder=""      
                            style={{...styles.inputfield,color:"#666", borderBottomColor:"#ececec", paddingLeft:60}}
                        //    onChange={props.handleChange("contact_admin")}
                        //    onBlur={props.handleBlur("contact_admin")}
                        //    value={props.values.contact_admin.replace(/[^0-9+]/g, '')}                       
                        />
                                
                        </div>        
                    </div>

                    <div style={{marginTop:10, padding:"0px 15px" }}>
                        <div>
                            <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > E-mail </span>
                        </div>
                        <div>  
                        <input
                            type="text"
                            className="_inputRegisterVente"
                            placeholder=""      
                            style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                        //    onChange={props.handleChange("email_admin")}
                        //    onBlur={props.handleBlur("email_admin")}
                        //    value={props.values.email_admin.toLowerCase()}                       
                        /> 
                        </div>      
                    </div>

                    <div style={{marginTop:10, padding:"0px 15px" }}>
                        <div>
                            <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Adresse </span>
                        </div>
                        <div>  
                        <input
                            type="password"
                            className="_inputRegisterVente"
                            placeholder=""      
                            style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                        //    onChange={props.handleChange("password_admin")}
                        //    onBlur={props.handleBlur("password_admin")}
                        //    value={props.values.password_admin.toUpperCase()}                       
                        /> 
                        </div>      
                    </div>

                    <div style={{marginTop:10, padding:"0px 15px" }}>
                        <div>
                            <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} >Commune </span>
                        </div>
                        <div>  
                        <input
                            type="password"
                            className="_inputRegisterVente"
                            placeholder=""      
                            style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                        //    onChange={props.handleChange("passwordConfirmation")}
                        //    onBlur={props.handleBlur("passwordConfirmation")}
                        //    value={props.values.passwordConfirmation.toUpperCase()}                       
                        /> 
                        </div>      
                    </div>
                    
                    <div onClick={validOrder}  style={{marginTop:15, height:45, backgroundColor:"#10b981", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", marginLeft:15, marginRight:15  }} >
                        <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > Valider la commande </span>
                    </div>


                    </div>
            
        </div>
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