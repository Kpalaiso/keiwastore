import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector, batch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Search } from "react-feather";
import CircularProgress from '@mui/material/CircularProgress';
import DrawerNavigator from "../components/DrawerNavigator";
import { additionCartMontant, formatNumber } from "../functions/General";
import Grid from '@mui/material/Grid';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ItemProduct from "../components/ItemProduct";
import ModalDetailProduct from "../components/ModalDetailProduct";
import ModalLogin from "../components/ModalLogin";
import ModalRating from "../components/ModalRating";
import SliderPrice from "../components/SliderPrice";
import { _saveRating, _findUserUserStoreProductRating, _updateProductRating, _updateProductStockRating, _findUserProductRatingByStockId } from "../functions/requestRating";
import { ADD_CART, UPDATE_STOCK_PRODUCT, ADD_USER_STORE_RATING, UPDATE_CART, REFRESH_VIEW, GET_USER_COORDINATES } from "../lib/actions/action_type";
import '../App.css';

const Home = () => {

  const ws = new WebSocket('wss://testapi.keiwa.app/');
  const dispatch=useDispatch();
  const history=useHistory();
  const [openDrawer, setOpenDrawer]=useState(false);
  const [openDetailModal, setOpenDetailModal]=useState(false);
  const stock_product=[...useSelector(state => state.product_list)];
  const categoryData=[...useSelector(state => state.category_list)];
  const data_store=[...useSelector(state => state.store_data)];
  const [loading, setLoading]=useState(false);
  const data_user_store=[...useSelector(state => state.list_user_store)];
  const cartData=[...useSelector(state => state.cart_list)];
  const user_data_infos=[...useSelector(state => state.list_user_infos)];
  let _isRefresh=useSelector(state => state.isRefresh);
  const [data_product, setDataProduct]=useState([]);
  const [other_data_product, setOtherDataProduct]=useState([]);
  const [category_product, setCategoryProduct]=useState([]);
  const [checkCategory, setCheckCategory]=useState(null);
  const [id_display_product, setIdDisplayProduct]=useState(0);
  const [openModal, setOpenModal]=useState(false);
  const [openDetailModalRating, setOpenDetailModalRating]=useState(false);
  const [typePage, setTypePage]=useState("");

  useEffect(()=>{
    let _listCategory=[...categoryData];
    if(user_data_infos && user_data_infos[0].id_order_category_product){
        let _tabIndexCategory = (user_data_infos[0].id_order_category_product).split(",").map(item=>item);
        _listCategory=_listCategory.sort((a, b) => _tabIndexCategory.indexOf(a.id_category) - _tabIndexCategory.indexOf(b.id_category));
    } 
    _listCategory.unshift({id_local_category:0, nom_category:"Tout", color_category:"#f6b229"});
    let _listProduct=stock_product.filter(item=>item.id_category.indexOf(parseInt(_listCategory[0].id_local_category))>-1);
    setCheckCategory(_listCategory[0].id_local_category);
    setDataProduct(_listProduct);
    setOtherDataProduct(_listProduct);
    setCategoryProduct(_listCategory);
    history.replace("/");
  }, []);

  useEffect(()=>{
    const options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge:Infinity
    };
    navigator?.geolocation.getCurrentPosition(success, error, options);
  }, [])

  const success=({coords: {latitude: lat, longitude: lng}})=> {
    const pos = {lat, lng}
     if(typeof(pos)!="undefined"){
       console.log(pos);
       dispatch({type:GET_USER_COORDINATES, payload:pos});
    } 
  }

  const error=(err)=> {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }

  const searchProduct = value => {
    const filteredProduct = other_data_product.filter(product => {
      let searchTermLowercase = value.toLowerCase();
      if( product && typeof(product.description)!= 'undefined'){
        let productLowercase = product.description.toLowerCase();
        return productLowercase.indexOf(searchTermLowercase) > -1;
      }
    });
    setDataProduct(filteredProduct); 
  }

  const toggleOpenDrawer=()=>setOpenDrawer(!openDrawer);

  const toggleOpenDetailModal=()=>setOpenDetailModal(!openDetailModal);

  const _choiceCategory=(id_category)=>{
    let _listProduct=stock_product.filter(item=>item.id_category?.indexOf(id_category)>-1);
    setCheckCategory(id_category);
    setDataProduct(_listProduct);
    setOtherDataProduct(_listProduct);
  }

  const addProductToCart=(data)=>{
      let _listProduct=stock_product.map(item=>item.id_stock==data.id_stock?{ ...item, qty:data.qty, isCart:true }: item);
      let _data_product=data_product.map(item=>item.id_stock==data.id_stock?{ ...item, qty:data.qty, isCart:true }: item);
      setDataProduct(_data_product);
      setOtherDataProduct(_data_product); 
      batch(()=>{
           dispatch({type:ADD_CART, payload:[data]});
           dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
           dispatch({type:REFRESH_VIEW, payload:!_isRefresh});
      });
   }

  const increaseProductCart=(id_stock)=>{
        let newCart=cartData.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty+1, price:parseInt(item.prix_vente)*(item.qty+1) }: item);
        let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty+1, isCart:true }: item);
        let _data_product=data_product.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty+1, isCart:true }: item);
        setDataProduct(_data_product);
        setOtherDataProduct(_data_product);
        batch(()=>{
            dispatch({type:UPDATE_CART, payload:newCart});
            dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
            dispatch({type:REFRESH_VIEW, payload:!_isRefresh});
        });
  }

  const discreaseProductCart = (id_stock,qty) =>{
      if(qty<=1){
        let newCart=cartData.filter(item=>item.id_stock!=id_stock);
        let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:0, isCart:false }: item);
        let _data_product=data_product.map(item=>item.id_stock==id_stock?{ ...item, qty:0, isCart:false }: item);
        setDataProduct(_data_product);
        setOtherDataProduct(_data_product);
        batch(()=>{
            dispatch({type:UPDATE_CART, payload:newCart});
            dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
            dispatch({type:REFRESH_VIEW, payload:!_isRefresh});
        });
      }
      else if(qty>1){
        let newCart=cartData.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty-1, price:parseInt(item.prix_vente)*(item.qty-1) }: item);
        let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty-1, isSelect:true }: item);
        let _data_product=data_product.map(item=>item.id_stock==id_stock?{ ...item, qty:item.qty-1, isSelect:true }: item);
        setDataProduct(_data_product);
        setOtherDataProduct(_data_product);
        batch(()=>{
            dispatch({type:UPDATE_CART, payload:newCart});
            dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
            dispatch({type:REFRESH_VIEW, payload:!_isRefresh});
        });
      }
    }

    const goToCart=()=>history.push("/cart");

    const goToDrawerCart=()=>{
        setOpenDrawer(!openDrawer)
        history.push("/cart");
    }

    const goToDrawerContact=()=>{
        setOpenDrawer(!openDrawer)
        history.push("/contact");
    }

    const goToDrawerOrder=()=>{
        setOpenDrawer(!openDrawer);
        setTypePage("commande");
        if(data_user_store.length>0){
            history.push("/commande");
        }
        else{
            toggleModalDialogue();  
        }
    }

    const _editProductRating=(id_stock)=>{
        setTypePage("rating");
        setIdDisplayProduct(id_stock)
        if(data_user_store.length>0){
            toggleOpenDetailModalRating();
        }
        else{
            toggleModalDialogue();  
        }
    }

    const displayDetailProduct=(id_stock)=>{
        setIdDisplayProduct(id_stock)
        toggleOpenDetailModal();
    }

    const verifConnected=()=>{
        if(typePage=="commande"){
            history.push("/commande");
        }
        else if(typePage=="rating"){
            toggleOpenDetailModalRating();
        }
    }

    const _addProductRating=async(nb_etoile, id_stock)=>{
        setLoading(true);
        let _nb_etoile=parseFloat(nb_etoile/20);
        let tab_rating = await _findUserUserStoreProductRating(data_user_store[0].id_client_store, id_stock);
        if(tab_rating.length<=0){
            let _data_rating={id_user: data_store[0].id_user,id_stock:id_stock,id_store:data_store[0].id_local_store,nb_etoile:_nb_etoile,date_enregistrement:(Date.now()).toString(),id_client_store:data_user_store[0].id_client_store,nom_client_store:data_user_store[0].nom,telephone_client_store:data_user_store[0].numero_telephone,email_client_store:data_user_store[0].email}
            let _id_product_rating=await _saveRating(_data_rating);
            let data_product_rating=await _findUserProductRatingByStockId(id_stock);
            let moy_nb_rating=parseFloat(additionCartMontant(data_product_rating, 0, 'nb_etoile')/data_product_rating.length);
            let data_update_rating={id_stock: id_stock, nb_etoile: moy_nb_rating }
            await _updateProductStockRating(data_update_rating);
            _data_rating.id_product_rating=_id_product_rating;
            let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, nb_etoile:moy_nb_rating }: item);
            setDataProduct(_listProduct);
            batch(()=>{
                dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
                dispatch({type:ADD_USER_STORE_RATING, payload:[_data_rating]});
                dispatch({type:REFRESH_VIEW, payload:!_isRefresh});
            });
            setLoading(false);
            ws.send(JSON.stringify({id_user:data_store[0].id_user,event:"reload_all_data", id_store:data_store[0].id_local_store}));
        }
    }

    const editProductRating=async(id_product_rating,nb_etoile,id_stock)=>{
        setLoading(true);
        let _nb_etoile=parseFloat(nb_etoile/20);
        let _data_rating={ id_product_rating:id_product_rating, nb_etoile:_nb_etoile, id_stock:id_stock };
        let _id_product_rating=await _updateProductRating(_data_rating);
        let data_product_rating=await _findUserProductRatingByStockId(id_stock);
        let moy_nb_rating=parseFloat(additionCartMontant(data_product_rating, 0, 'nb_etoile')/data_product_rating.length);
        let data_update_rating={id_stock: id_stock, nb_etoile: moy_nb_rating }
        await _updateProductStockRating(data_update_rating);
        let _listProduct=stock_product.map(item=>item.id_stock==id_stock?{ ...item, nb_etoile:moy_nb_rating }: item);
        setDataProduct(_listProduct);
        batch(()=>{
            dispatch({type:UPDATE_STOCK_PRODUCT, payload:_listProduct});
            dispatch({type:REFRESH_VIEW, payload:!_isRefresh});
        });
        setLoading(false);
    //   ws.send(JSON.stringify({id_user:data_store[0].id_user,event:"reload_all_data", id_store:data_store[0].id_local_store}));
    }

    const toggleModalDialogue=()=>setOpenModal(!openModal);

    const toggleOpenDetailModalRating=()=>setOpenDetailModalRating(!openDetailModalRating);

    const editListProduct=(value)=>{
        let _listProduct=other_data_product.filter(item=>(parseInt(item.prix_vente)>=parseInt(value[0]) && parseInt(item.prix_vente)<=parseInt(value[1]) ));
        setDataProduct(_listProduct);
    } 
     
  return (
    <div>
        <header className='headerMobile'  >
            <div className='searchNavBar' >
                <div onClick={()=>toggleOpenDrawer()} style={{     marginTop:3 }} ><span><MenuIcon  style={{ color:"#222", fontSize:26 }}  /></span></div>
                <div><span style={{ fontFamily:"century_bold", color:"#222", fontSize:16}} >{data_store[0].nom}</span></div>
                <div onClick={goToCart} style={{ marginTop:3, position:"relative" }} >
                    <span style={{ position:"absolute", top:-5, right:-7,  width:20, height:20, borderRadius:20, backgroundColor:"#f6b229", color:"#fff", fontSize:9, display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"century_bold" }} >{cartData.length}</span>
                    <ShoppingCartOutlinedIcon  style={{ color:"#222", fontSize:26 }}  />
                </div>
            </div>
            <div className='headerNavTabBar' >
                {
                    category_product.length>0 && category_product.map((item,index)=>{
                        return(
                            <React.Fragment key={item.id_local_category} >
                                {checkCategory === item.id_local_category && (
                                    <div  style={{  padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:item.color_category, borderRadius:30 }} >
                                        <div><span style={{ fontSize:11, fontFamily:"Century_bold", color:"#fff", whiteSpace:"nowrap" }}  > {item.nom_category} </span></div>
                                    </div>)}
                                {checkCategory != item.id_local_category && (
                                    <div onClick={() => _choiceCategory(item.id_local_category)} style={{   padding:"13px 14px", marginLeft:5, marginRight:5, backgroundColor:"#f0f0f0", borderRadius:30 }} >
                                        <div><span style={{  fontSize:11, fontFamily:"Century_bold", color:"#222", whiteSpace:"nowrap" }}  > {item.nom_category} </span></div>
                                    </div>)}
                            </React.Fragment>
                        )
                    })
                }
            </div> 
            <div style={{  position:"relative", marginLeft:15, marginRight:15, }} >
                <Search size={18} style={{ position:"absolute", right:15, top:13, color:"#bbb" }}  />
                <input
                    type="text"
                    style={{border: "1px solid #f2f2f2",background: "#f2f2f2",width: "100%",height:45,boxSizing: "border-box",borderRadius:60,color: "#333",fontSize:12,outline: "none",overflow: "hidden",zIndex: 1,paddingRight:35,paddingLeft:15, fontFamily:"century_bold" }}
                    placeholder="Rechercher un produit..."
                    onChange={e=>searchProduct(e.target.value)}
                />
            </div>  
            <SliderPrice data_product={other_data_product} checkCategory={checkCategory} editListProduct={editListProduct} />
        </header>
        <div className='containProduct'  > 
        <Grid container spacing={0}>
            {
                data_product.length>0 && data_product.map((item,index)=>{
                    return(
                       <ItemProduct key={item.id_stock} qty={item.qty} isCart={item.isCart} icone_product={item.icone_product} description={item.description} prix_vente={item.prix_vente} quantite={item.quantite} unite_vente={item.unite_vente} id_stock={item.id_stock} is_new_stock={item.is_new_stock} quatity_security={item.quatity_security} addProductToCart={addProductToCart} increaseProductCart={increaseProductCart} discreaseProductCart={discreaseProductCart} id_product={item.id_product} other_index={item.other_index} displayDetailProduct={displayDetailProduct} _index={index} _editProductRating={_editProductRating}  nb_etoile={item.nb_etoile} /> 
                    )
                })
            }
        </Grid>
        {
            cartData.length>0 && (
                <div onClick={goToCart} style={{ position:"fixed", bottom:10, right:0, width:window.innerWidth-50, height:50, background:"#f6b229", borderRadius:20, marginRight:25, boxShadow:"rgba(0, 0, 0, 0.1) 0px 1px 2px 0px", display:"flex", alignItems:"center", justifyContent:"space-between*" }} >
                    <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center" }} > <ShoppingBasketIcon style={{ fontSize:20, color:"#fff"  }} /> <div style={{marginLeft:5, marginTop:0}} > <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} > {cartData.length} produit(s) </span> </div> </div>
                    <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center" }} > <div style={{ marginTop:2 }} > <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} > Mon pannier </span> </div> </div>
                    <div style={{ flex:1, display:"flex", alignItems:"center", justifyContent:"center" }} > <div style={{ marginTop:2 }} > <span style={{ fontFamily:"century_bold", color:"#fff", fontSize:11,  }} > {formatNumber(additionCartMontant(cartData, 0, 'price'))} FCFA </span> </div> </div>
                </div>
            )
        }
        </div> 
        {
            loading && (
                <div style={{ position:"absolute", top:0, left:0, right:0, bottom:0, backgroundColor:"rgba(255, 255, 255, 0.5)", display:"flex", alignItems:"center", justifyContent:"center" }} >
                    <CircularProgress style={{ color:"#f6b229" }} />
                </div>
            )
        }
        {
            openModal && <ModalLogin  openModal={openModal} toggleModalDialogue={toggleModalDialogue} goToCheckout={verifConnected}  />
        }
        <DrawerNavigator openDrawer={openDrawer} toggleOpenDrawer={toggleOpenDrawer} goToDrawerCart={goToDrawerCart} goToDrawerOrder={goToDrawerOrder} goToDrawerContact={goToDrawerContact} />
        {
            (openDetailModal && id_display_product>0) && <ModalDetailProduct openDetailModal={openDetailModal} toggleOpenDetailModal={toggleOpenDetailModal} id_display_product={id_display_product} increaseProductCart={increaseProductCart} addProductToCart={addProductToCart}  discreaseProductCart={discreaseProductCart} /> 
        }
        {
            (openDetailModalRating && id_display_product>0) && <ModalRating openDetailModalRating={openDetailModalRating} toggleOpenDetailModalRating={toggleOpenDetailModalRating}  id_display_product={id_display_product} _addProductRating={_addProductRating}  editProductRating={editProductRating}  />
        }
    </div>
  )
}

export default Home