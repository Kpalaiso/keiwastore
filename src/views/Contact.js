import React from 'react';
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PhoneIphoneRoundedIcon from '@mui/icons-material/PhoneIphoneRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import '../App.css';

const Contact = () => {

  const history=useHistory();
  const data_store=[...useSelector(state => state.store_data)];
  const _goBack=()=>history.goBack();

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{ lat: parseFloat(data_store[0].latitude), lng: parseFloat(data_store[0].longitude) }}
    >
      <Marker
        position={{ lat: parseFloat(data_store[0].latitude), lng: parseFloat(data_store[0].longitude) }}
      />
    </GoogleMap>
  ));

  return (
        <div>
        <header className='headerMobile' >
        <div className='searchNavBar' >
            <div onClick={()=>_goBack()}  style={{  marginTop:3 }} ><span><ArrowBackIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
            <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >Mes contacts</span></div>
            <div  style={{ marginTop:3, position:"relative", width:40 }} >

            </div>
        </div>
        </header>
        <div className='containCart' style={{ marginTop:-10, backgroundColor:"#fff" }} >
            <div style={{ paddingLeft:5, paddingRight:5, marginLeft:15, marginRight:15,  paddingTop:15, paddingBottom:15, borderBottom:"solid 1px #ececec", marginTop:0,  borderLeft:"solid 3px #f6b229" }} >
                <div><span style={{color:"#333", fontSize:16, fontFamily:"Century_bold" }} > Contact de la boutique </span></div>
            </div>
            <div style={{ paddingLeft:5, paddingRight:5, marginLeft:15, marginRight:15, paddingTop:15, paddingBottom:15, marginTop:10, borderBottom:"solid 1px #ececec" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}} >
                    <HomeRoundedIcon  style={{fontSize:20, color:"#aaa" }} />
                    <div><span style={{color:"#aaa", fontSize:13, marginLeft:5, fontFamily:"Century_bold" }} > Nom de la boutique </span></div>
                </div>
                <div style={{ marginTop:7 }} ><span style={{color:"#444", fontSize:16, marginLeft:5, marginTop:5, fontFamily:"Century_bold" }} > {data_store[0].nom} </span></div>
                <div style={{ marginTop:2 }} ><span style={{color:"#aaa", fontSize:10, marginLeft:5, marginTop:0, fontFamily:"Century_bold" }} > {data_store[0].description.substring(0,45)} </span></div>
            </div>
            <div style={{ paddingLeft:5, paddingRight:5, marginLeft:15, marginRight:15, paddingTop:15, paddingBottom:15, marginTop:0, borderBottom:"solid 1px #ececec" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}} >
                    <PhoneIphoneRoundedIcon  style={{fontSize:20, color:"#aaa" }} />
                    <div><span style={{color:"#aaa", fontSize:13, marginLeft:5, fontFamily:"Century_bold" }} > Contact </span></div>
                </div>
                <div style={{ marginTop:7 }} ><span style={{color:"#444", fontSize:16, marginLeft:5, marginTop:5, fontFamily:"Century_bold" }} > {data_store[0].contact} </span></div>
            </div>
            <div style={{ paddingLeft:5, paddingRight:5, marginLeft:15, marginRight:15, paddingTop:15, paddingBottom:15, marginTop:0, borderBottom:"solid 1px #ececec" }} >
                <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}} >
                    <EmailRoundedIcon  style={{fontSize:20, color:"#aaa" }} />
                    <div><span style={{color:"#aaa", fontSize:13, marginLeft:5, fontFamily:"Century_bold" }} > Email </span></div>
                </div>
                <div style={{ marginTop:7 }} ><span style={{color:"#444", fontSize:16, marginLeft:5, marginTop:5, fontFamily:"Century_bold" }} > {data_store[0].email} </span></div>
            </div>
            <div id="mapViews" style={{ flex:1, height:300, width:"100%", background:"#f5f7fb", display:"flex",  alignItems:"center", justifyContent:"center" }} >  
            {
                (data_store[0].latitude!=0 && data_store[0].longitude!=0) && (
                    <MapWithAMarker
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCwmz2CstWs-2hp_ygHYc527i7XBgIrNJg&libraries=places`}
                        loadingElement={<div style={{ height: "100%" }} />}
                        containerElement={<div style={{ height: 250, width:"100%" }} />}
                        mapElement={<div style={{ height: "100%" }} />}
                    />
                )
            } 
            </div> 
        </div>
        </div>
  )
}

export default Contact;