import React, {useState} from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import AlertBox from "../components/AlertBox";
import { randomString, UUID, date_time } from "../functions/General";
import { GET_CLIENT } from "../lib/actions/action_type";
import { _saveClient, _loginClientStore } from "../functions/requestClient";

const Account = () => {

  const history=useHistory();
  const dispatch=useDispatch();
  const data_store=[...useSelector(state => state.store_data)];
  const [loader, setLoader]=useState(false);
  const [otherLoader, setOtherLoader]=useState(false);
  const [errorLogin, setErrorLogin]=useState(false);

  const _goBack=()=>history.goBack();

  const goToCheckout=async(data_client)=>{
      setLoader(true);
      let _data_client={type_client:"client",nom:data_client.nom,numero_telephone:data_client.numero_telephone,email:data_client.email,avatar:"",adresse:data_client.adresse,ville:data_client.ville,region:"",country:"",latitude:"",longitude:"",id_user:data_store[0].id_user,id_account:0,id_client_local:UUID().toString(),date_enregistrement:date_time(),id_client_store:randomString(6)}
      let id_client=await _saveClient(_data_client);
      _data_client.id_client=id_client;
      dispatch({type:GET_CLIENT, payload:[_data_client]});
      setLoader(false);
      history.push("/checkout");
  }

  const goToLogin=async(value)=>{
      setOtherLoader(true);
      let _data_client=await _loginClientStore(value.id_client_store);
      dispatch({type:GET_CLIENT, payload:[_data_client]});
      setOtherLoader(false);
      history.push("/checkout");
  }

  const toggleError=()=>setErrorLogin(!errorLogin);

  return (
    <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>_goBack()}  style={{  marginTop:3 }} ><span><ArrowBackIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Identification</span></div>
            <div  style={{ marginTop:3, position:"relative", width:40 }} >

            </div>
        </div>
        </header>
        <div className='containCart' style={{ marginTop:0, backgroundColor:"#fff" }} >

        <div className="row listAlias">
        <div className="tabs">
        <input type="radio" name="tabs" id="tab__1" defaultChecked={true} />
        <label for="tab__1" style={{ fontFamily:"century_bold" }} >SE CONNECTER</label>
        <div className="tabs__content">
        <div className="row" >
            <div style={{  padding:"10px 15px", marginTop:-17, backgroundColor:"#f5f5f5"  }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:13,  }} >Entrer votre code boutique</span></div>
            </div>
            <AlertBox openAlert={errorLogin} toggleOpenAlert={toggleError}  />
            <LoginForm loader={otherLoader} goToLogin={goToLogin} />
        </div>
        </div>
        <input type="radio" name="tabs" id="tab__2"  />
        <label for="tab__2" style={{ fontFamily:"century_bold" }} >CRÉER UN COMPTE</label>
        <div className="tabs__content">
        <div className="row">
            <RegisterForm  goToCheckout={goToCheckout} loader={loader} />
        </div>
        </div>
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

export default Account