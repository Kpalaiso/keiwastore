import React, {useState, useEffect} from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import OtherRegisterForm from "../components/OtherRegisterForm";
import AlertBox from "../components/AlertBox";
import ModalMapUser from "../components/ModalMapUser";
import Geocode from "react-geocode";
import { date_time } from "../functions/General";
import { GET_USER_STORE } from "../lib/actions/action_type";
import { _saveClient, _loginClientStore, _saveUserStore,  _loginUserStore, _findUserStoreByEmail } from "../functions/requestClient";

Geocode.setApiKey("AIzaSyCwmz2CstWs-2hp_ygHYc527i7XBgIrNJg");

Geocode.setLanguage("fr");

Geocode.setRegion("ci");

Geocode.enableDebug();

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalLogin({openModal,toggleModalDialogue,goToCheckout}) {

  let _list_user_coordinates=useSelector(state => state.list_user_coordinates);

  const dispatch=useDispatch();
  const [loader, setLoader]=useState(false);
  const [otherLoader, setOtherLoader]=useState(false);
  const [errorLogin, setErrorLogin]=useState(false);
  const [errorRegister, setErrorRegister]=useState(false);
  const [address, setAddress]=useState("");
  const [city, setCity]=useState("");
  const [coordinates, setCordinates]=useState(null);
  const [loadRegister, setLoadRegister]=useState(false);
  const [openMapUser,setOpenMapUser]=useState(false);

  const getUserAdress=(value)=>{
    setAddress(value);
  }

  const getCoordinates=(coords)=>setCordinates(coords);

  const getCity=(value)=>{
    setCity(value);
  }

  const edituserLocation=(city,adresse,coords)=>{
    setAddress(adresse);
    setCity(city);
    setCordinates(coords)
  }

  useEffect(()=>{
    if(_list_user_coordinates){
      Geocode.fromLatLng( _list_user_coordinates.lat , _list_user_coordinates.lng ).then(
        response => {
            for(let i=0;i<response.results.length;i++){
              if( response.results[i].types.indexOf("sublocality_level_1")!= -1){
                setCity(response.results[i].formatted_address);
              }
            }
            for(let j=0;j<response.results.length;j++){
                if(response.results[j].types.indexOf("neighborhood")!= -1 ){
                    let _address=response.results[j].formatted_address.split(", ");
                    setAddress(_address[0]);
                    break;
                }
                else if( response.results[j].types.indexOf("establishment")!= -1){
                    let _address=response.results[j].formatted_address.split(", ");
                    setAddress(_address[0]);
                }
            }
            setLoadRegister(true); 
            setCordinates(_list_user_coordinates);
        },
        error => {
          console.error( error );
        }
      );
    }
    else{
      setLoadRegister(true);
    }
  }, []);

  const handleClose = () => toggleModalDialogue();

  const toggleModalMapUser=()=>{
    setOpenMapUser(!openMapUser);
  }

  const goToCreateAccount=async(values)=>{
      setLoader(true);
      let _data_user=null;
      let user_data=await _findUserStoreByEmail(values.email);
      if(user_data.length<=0){
        if(_list_user_coordinates){
          _data_user={nom:values.nom,numero_telephone:values.numero_telephone,email:values.email,password:values.password,adresse:address,ville:city,date_enregistrement:date_time(),latitude:coordinates.lat,longitude:coordinates.lng}
        }
        else{
          _data_user={nom:values.nom,numero_telephone:values.numero_telephone,email:values.email,password:values.password,adresse:values.adresse,ville:values.ville,date_enregistrement:date_time(),latitude:0,longitude:0}
        }
        let _id_client_store=await _saveUserStore(_data_user);
        _data_user.id_client_store=_id_client_store;
        dispatch({type:GET_USER_STORE, payload:[_data_user]});
        setLoader(false);
        goToCheckout();
        handleClose();  
      }
      else{
        toggleRegisterError(true);
        setLoader(false);
      } 
  }

  const goToLogin=async(value)=>{
      setOtherLoader(true);
      let _data_user=await _loginUserStore(value.email,value.password);
      if(_data_user.length){
        dispatch({type:GET_USER_STORE, payload:_data_user});
        setOtherLoader(false);
        goToCheckout();
        handleClose();
      }
      else{
        setErrorLogin(true);
        setOtherLoader(false);
      } 
  }

  const toggleError=()=>setErrorLogin(!errorLogin);

  const toggleRegisterError=()=>setErrorRegister(!errorRegister);

  const goToModalMap=()=>{
    alert("Bieng is good");
  }

  return (
      <Dialog
        fullScreen
        open={openModal}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>handleClose()}  style={{  marginTop:3 }} ><span><CloseRoundedIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Identification</span></div>
            <div  style={{ marginTop:3, position:"relative", width:40 }} >

            </div>
        </div>
        </header>
        <div className='containCart' style={{ marginTop:0, backgroundColor:"#fff" }} >

        <div className="row listAlias">
        <div className="tabs">
        <input type="radio" name="tabs" id="tab__1" defaultChecked={true} />
        <label htmlFor="tab__1" style={{ fontFamily:"century_bold" }} >SE CONNECTER</label>
        <div className="tabs__content">
        <div className="row" >
            <div style={{  padding:"10px 15px", marginTop:-17, backgroundColor:"#f5f5f5"  }}  >
                <div><span style={{ fontFamily:"century_bold", color:"#75757a", fontSize:11,  }} >Entrer votre email et votre mot de passe</span></div>
            </div>
            <AlertBox openAlert={errorLogin} toggleOpenAlert={toggleError} textContent="Les identifiants entré sont incorectes" />
            <LoginForm loader={otherLoader} goToLogin={goToLogin}  />
        </div>
        </div>
        <input type="radio" name="tabs" id="tab__2"  />
        <label htmlFor="tab__2" style={{ fontFamily:"century_bold" }} >CRÉER UN COMPTE</label>
        <div className="tabs__content">
        <div className="row">
            <AlertBox openAlert={errorRegister} toggleOpenAlert={toggleRegisterError} textContent="Un compte utilisateur est déjà associé à cet E-mail" />
            {
              (loadRegister && _list_user_coordinates ) && ( <RegisterForm  goToCheckout={goToCreateAccount} loader={loader}  address={address} city={city}  toggleModalMapUser={toggleModalMapUser} coordinates={coordinates} /> )
            }
            {
              (loadRegister && !_list_user_coordinates ) && ( <OtherRegisterForm  goToCheckout={goToCreateAccount} loader={loader}  /> )
            }
        </div>
        </div>
        </div>
        </div>
        </div>
        {
          openMapUser && <ModalMapUser openMapUser={openMapUser} toggleModalMapUser={toggleModalMapUser}  address={address} _city={city}  getUserAdress={getUserAdress} getCity={getCity} coordinates={coordinates} getCoordinates={getCoordinates} edituserLocation={edituserLocation} />
        }
        </div>
      </Dialog>
  );
}