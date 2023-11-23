import React from 'react';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Formik } from "formik";
import * as yup from "yup";

const LoginSchema=yup.object({
    email: yup.string().email('Entrer un email valide').required('Ce champs est obligatoire !'),
    password: yup.string().required('Ce champs est obligatoire !'),
});

const LoginForm = ({goToLogin,loader}) => {

    const [passwordShown, setPasswordShown] = React.useState(false);

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordShown(!passwordShown);
    };

    return (
                <Formik
                    validationSchema={LoginSchema}
                    initialValues={{email:"",password:""}}
                    onSubmit={(values)=>{
                        goToLogin(values)
                    }}
                >
                {
                (props)=>(
                    <>
                    <form>
                    
                    <div style={{position:"relative"}}  >
                    <div style={{marginTop:0, padding:"0px 15px" }}>
                        <div>
                            <span style={{fontSize:12, color: '#333', fontFamily:"century_bold" }} > Email </span>
                        </div>  
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
                    {
                        props.touched.email && props.errors.email && (
                            <span className="help-block" >{props.touched.email && props.errors.email}</span>
                        )
                    }
                    <div style={{marginTop:5, padding:"0px 15px",  }}>
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
                    {
                        !loader && (
                            <div onClick={props.handleSubmit} style={{marginTop:15, height:45, backgroundColor:"#f6b229", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", borderRadius:4, marginLeft:0, marginRight:0, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer", marginLeft:15, marginRight:15  }} >
                                <span style={{ fontSize:13, color:"#fff", fontFamily:"century_bold"}} > SE CONNECTER </span>
                            </div>
                        )
                    }
                    {
                        loader && (
                            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", marginTop:25 }} >
                                <CircularProgress style={{ color:"#f6b229" }} size={26} />
                            </div>
                        ) 
                    }
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
}

export default LoginForm