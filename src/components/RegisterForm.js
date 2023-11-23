import React from 'react';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Formik } from "formik";
import * as yup from "yup";

const RegisterSchema=yup.object({
    email: yup.string().email('Entrer un email valide').required('Ce champs est obligatoire !'),
    numero_telephone: yup.string().required('Ce champs est obligatoire !'),
    nom: yup.string().required('Ce champs est obligatoire !'),
//    adresse: yup.string().required('Ce champs est obligatoire !'),
    password: yup.string().required('Ce champs est obligatoire !').min(6, "Veuillez entrer un mot de passe d'au moins 6 caractères"),
//    ville: yup.string().required('Ce champs est obligatoire !'),
});

const RegisterForm = ({goToCheckout,loader,address,city,toggleModalMapUser}) => {

    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    };

    return (
                <Formik
                    validationSchema={RegisterSchema}
                    initialValues={{email:"", numero_telephone:"", nom:"", password:"" }}
                    onSubmit={(values)=>{
                    //    console.log(values);
                        goToCheckout(values)
                    }}
                >
                {
                (props)=>(
                    <>
                    <form>
                    <div className="row">
                    <div style={{  padding:"10px 15px", marginTop:-17, backgroundColor:"#f5f5f5"  }}  >
                        <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:13,  }} >Informations complémentaires</span></div>
                    </div>
                    <div style={{position:"relative"}}  >
                        <div style={{marginTop:10, padding:"0px 15px" }}>
                            <div>
                                <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Nom et prénom </span>
                            </div>  
                            <input
                                type="text"
                                className="_inputRegisterVente"
                                placeholder=""      
                                style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                                onChange={props.handleChange("nom")}
                                onBlur={props.handleBlur("nom")}
                                value={props.values.nom}
                            />       
                        </div>
                        {
                            props.touched.nom && props.errors.nom && (
                                <span className="help-block" >{props.touched.nom && props.errors.nom}</span>
                            )
                        }
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
                                onChange={props.handleChange("numero_telephone")}
                                onBlur={props.handleBlur("numero_telephone")}
                                value={props.values.numero_telephone.replace(/[^0-9+]/g, '')}                       
                            />        
                            </div>        
                        </div>
                        {
                            props.touched.numero_telephone && props.errors.numero_telephone && (
                                <span className="help-block" >{props.touched.numero_telephone && props.errors.numero_telephone}</span>
                            )
                        }
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
                                onChange={props.handleChange("email")}
                                onBlur={props.handleBlur("email")}
                                value={props.values.email}                       
                            /> 
                            </div>      
                        </div>
                        {
                            props.touched.email && props.errors.email && (
                                <span className="help-block" >{props.touched.email && props.errors.email}</span>
                            )
                        }
                        <div style={{marginTop:10, padding:"0px 15px" }}>
                            <div>
                                <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Mot de passe </span>
                            </div>
                            <div style={{ position:"relative" }} >  
                            <input
                                type={!passwordShown?"password":"text"}
                                className="_inputRegisterVente"
                                placeholder=""      
                                style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                                onChange={props.handleChange("password")}
                                onBlur={props.handleBlur("password")}
                                value={props.values.password}                       
                            /> 
                            <button style={{ position:"absolute", top:13, right:5, border:"solid 1px transparent", background:"transparent", cursor:"pointer" }} onClick={(e)=>togglePassword(e)} > 
                                {
                                    passwordShown && <VisibilityOffIcon  style={{ color:"#333", fontSize:20 }} />
                                }
                                {
                                    !passwordShown && <RemoveRedEyeIcon  style={{ color:"#333", fontSize:20 }}  />
                                } 
                            </button>
                            </div>      
                        </div>
                        {
                            props.touched.password && props.errors.password && (
                                <span className="help-block" >{props.touched.password && props.errors.password}</span>
                            )
                        }
                        {/* <div style={{marginTop:10, padding:"0px 15px" }}>
                            <div>
                                <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} >Commune </span>
                            </div>
                            <div>  
                            <input
                                type="text"
                                className="_inputRegisterVente"
                                placeholder=""      
                                style={{color:"#666", borderBottomColor:"#ececec", ...styles.inputfield}}
                                onChange={props.handleChange("ville")}
                                onBlur={props.handleBlur("ville")}
                                value={props.values.ville}                       
                            /> 
                            </div>      
                        </div>
                        {
                            props.touched.ville && props.errors.ville && (
                                <span className="help-block" >{props.touched.ville && props.errors.ville}</span>
                            )
                        } */}
                        <div style={{marginTop:10, padding:"0px 15px" }}>
                            <div>
                                <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Adresse </span>
                            </div>
                            <div style={{ position:"relative" }} >  
                            <div style={{ position:"absolute", top:10, left:0, border:"solid 1px transparent", background:"transparent", cursor:"pointer" }}  > 
                             <FmdGoodRoundedIcon  style={{ color:"#f6b229", fontSize:24 }} />
                            </div>
                            <div style={{border: "1px solid #fff",background: "#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", width: "100%",height:45,marginRight: "5px",marginTop: "5px",boxSizing: "border-box",borderRadius:7,color: "#666",fontSize:13,outline: "none",overflow: "hidden",zIndex: 1,paddingLeft:40, paddingRight:40, fontFamily:"Century_Regular", display:"flex", alignItems: "center" }} >
                            {address+", "+city}
                            </div>
                            <div  onClick={()=>toggleModalMapUser()}  style={{ position:"absolute", top:12, right:5, border:"solid 1px transparent", background:"transparent", cursor:"pointer" }}  > 
                             <ExpandMoreRoundedIcon  style={{ color:"#222", fontSize:24 }} />
                            </div>
                            </div>      
                        </div>
                        {
                            props.touched.adresse && props.errors.adresse && (
                                <span className="help-block" >{props.touched.adresse && props.errors.adresse}</span>
                            )
                        }
                        {
                            !loader && (
                                <div onClick={props.handleSubmit} style={{marginTop:15, height:45, backgroundColor:"#f6b229", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", marginLeft:15, marginRight:15  }} >
                                    <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > ENREGISTRER LES INFORMATIONS </span>
                                </div>
                            )
                        }
                        {
                            loader && (
                                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginTop:20 }} >
                                    <CircularProgress style={{ color:"#f6b229" }} />
                                </div>
                            ) 
                        }
                        </div>
                    </div>
                    </form>
                    </>
                    )
                    }
                </Formik>
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
    inputfieldMap:{
        paddingTop:0,
        paddingBottom:0,
        paddingLeft:30,
        fontSize:13,
        height:40,
        backgroundColor:"#ffff",
        border:"solid 1px #ececec",
        borderRadius:4,
        width:"100%",
        boxSizing:"border-box",
        marginTop:5,
        outline:"none",
        fontFamily:"productSans_Regular"
    }
}

export default RegisterForm