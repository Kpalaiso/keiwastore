import React, { useEffect } from 'react';
import { User, Clipboard, FileText, Home, ShoppingBag, Phone } from 'react-feather';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import { useHistory } from "react-router-dom";

const BottomTabBar = () => {

  const history=useHistory();

  useEffect(()=>{
    let btncontainer=document.getElementById("navbar");
    let btns = btncontainer.getElementsByClassName("btn");
    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click', function(){
            let current=document.getElementsByClassName("active");
            current[0].className=current[0].className.replace(" active");
            this.className+=" active";
        })
    }
  }, [])

  const goToHomePage=()=>history.push("/");
  
  const goToCartPage=()=>history.push("/cart");

  const goToAccountPage=()=>history.push("/account");

  const goToContactPage=()=>history.push("/contact");


  return (
    <footer>
        <nav className="nav" id='navbar' >
            <li className='btn active' onClick={()=>goToHomePage()} >
                <a  className='nav-link' >
                    <span><Home color="#333" size={24} /></span>
                </a>
            </li>
            <li className='btn' onClick={()=>goToCartPage()} >
                <a  className='nav-link' >
                    <span style={{ position:"absolute", top:-5, right:-7,  width:20, height:20, borderRadius:20, backgroundColor:"#f6b229", color:"#fff", fontSize:9, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"century_bold" }} >100</span>
                    <span><ShoppingBag color="#333" size={24} /></span>
                </a>
            </li>
            <li className='btn' onClick={()=>goToAccountPage()}>
                <a className='nav-link' >
                    <span><Clipboard  color="#333" size={24}  /></span>
                </a>
            </li>
            <li className='btn' onClick={()=>goToContactPage()}>
                <a  className='nav-link' >
                    <span><Phone color="#333" size={24} /></span>
                </a>
            </li>
        </nav>
      </footer>
  )
}

export default BottomTabBar