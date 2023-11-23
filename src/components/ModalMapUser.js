import React, {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import MyLocationIcon from '@mui/icons-material/MyLocation';
const GoogleMapsAPI="AIzaSyCwmz2CstWs-2hp_ygHYc527i7XBgIrNJg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalMapUser({openMapUser,toggleModalMapUser,address,_city,getUserAdress,coordinates,getCity,getCoordinates,edituserLocation}) {

  const [coords, setCoords]=useState(coordinates);
  const [adresse, setAdresse]=useState(address+", "+_city);
  const [city, setCity]=useState(_city);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCwmz2CstWs-2hp_ygHYc527i7XBgIrNJg",
  });

  const handleClose = () => toggleModalMapUser();

  const getuserplace=(list_user_coordinates)=>{
    Geocode.fromLatLng( list_user_coordinates.lat , list_user_coordinates.lng ).then(
      response => {
          for(let i=0;i<response.results.length;i++){
            if( response.results[i].types.indexOf("sublocality_level_1")!= -1){
              setCity(response.results[i].formatted_address);
            }
          }
      },
      error => {
        console.error( error );
      }
    );
  }

  const validerAdresse=()=>{
    edituserLocation(city,adresse,coords);
    handleClose();
  }

  return (
      <Dialog
        fullScreen
        open={openMapUser}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <div id="mapViews" style={{ flex:1, height:100+"vh", width:"100%", background:"#f5f7fb", display:"flex",  alignItems:"center", justifyContent:"center" }} >  
            {
                ( isLoaded && coordinates) && (
                  <GoogleMap
                  defaultZoom={15}
                  defaultCenter={{ lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) }}
                >
                    <div style={{  position:"absolute", top:53, left:10, right:10, }} >
                        <div style={{ width:window.screen.width-20, position:"relative",  }} >
                        <div onClick={()=>handleClose()} style={{ width:30, height:30, position:"absolute", left:10, top:10, }} >
                          <ArrowBackIcon  style={{  fontSize:22, color:"#333" }}  />
                        </div>
                        <div style={{border: "1px solid #fff",background: "#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", width: "100%",height:45,marginRight: "5px",marginTop: "5px",boxSizing: "border-box",borderRadius:7,color: "#666",fontSize:13,outline: "none",overflow: "hidden",zIndex: 1,paddingLeft:40, paddingRight:40, fontFamily:"Century_Regular", display:"flex", alignItems: "center" }} >
                        {adresse}
                        </div>
                        <MyLocationIcon  style={{ position:"absolute", fontSize:22, right:10, top:10, color:"#f6b229", }}  />
                        </div>
                    </div>
                    <div style={{  position:"absolute", top:103, left:10, right:10, }} >
                        <div style={{ width:window.screen.width-20, position:"relative",  }} >
                        <SearchRoundedIcon  style={{ position:"absolute", fontSize:22, left:10, top:18, color:"#333" }}  />
                        <Autocomplete
                        apiKey={GoogleMapsAPI}
                        style={{border: "1px solid #fff",background: "#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", width: "100%",height:45,marginRight: "5px",marginTop: "5px",boxSizing: "border-box",borderRadius:7,color: "#666",fontSize:13,outline: "none",overflow: "hidden",zIndex: 1,paddingLeft:40, fontFamily:"Century_Regular", }}
                        placeholder="Saisir une adresse..."
                        
                        onPlaceSelected={(place,inputRef) => {
                            setAdresse(inputRef.value);
                            setCoords({ lat:place.geometry.location.lat(), lng:place.geometry.location.lng() })
                            getuserplace({ lat:place.geometry.location.lat(), lng:place.geometry.location.lng() })
                        }}
                        options={{
                            types: ["establishment","geocode"],
                            componentRestrictions: { country: "ci" },
                        }}
                        /> 
                        </div>
                    </div>
                <Marker position={{ lat: parseFloat(coords.lat), lng: parseFloat(coords.lng) }} />
                </GoogleMap>
                )
            }
            <div  style={{ position:"fixed", bottom:0, left:0, right:0,  height:60, display:"flex", flexDirection:"row",  alignItems:"center", justifyContent:"center", backgroundColor:"#fff", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", paddingLeft:10, paddingRight:10  }} >
              <div onClick={()=>validerAdresse()} style={{ flex:1, marginLeft:10, height:45, borderRadius:4, display:"flex",  alignItems:"center", justifyContent:"center", backgroundColor:"#f6b229", boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"  }} >
                  <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:14,  }} >Valider l'adresse</span>
              </div>
            </div> 
        </div> 
      </Dialog>
  );
}