
export const UUID=()=>{
    var dt = Date.now()/1000;
    var uuid=Math.round(dt+Math.floor(Math.random() * Math.floor(10000000)));
    return uuid;
}

export const date_time=()=>Date.now().toString();

export const formatNumber=(number)=>{
    if(number.toString().length<=12){
        number += '';
        let x = number.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ' ' + '$2');
        }
        return x1 + x2;
    }
    else{
       return parseInt(number).toExponential(2); 
    }
}

export const additionCartMontant=(array, initvalue, key)=>{
    let somme = array.reduce(
    (accumulateur, valeurCourante) => accumulateur + parseInt(valeurCourante[key])
    , initvalue
    );
    return somme;
}

export const getDescription=(tab, key)=>{
    let description = tab.map(function(item) {
        return item[key];
      }).join(', ');
    return description;
}

export const randomString =(length)=> {
    let chars='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

export const generateNumberCommande=()=>{
    return (parseInt((Date.now()/8000)*2)).toString();
}

export const getMinPrice=(tabArray)=>{
    let min_price=0;
    if(tabArray.length>0){
        let prod_infos=tabArray.reduce(function(prev, curr) {
            return parseInt(prev.prix_vente) < parseInt(curr.prix_vente) ? prev : curr;
        });
        min_price=parseInt(prod_infos.prix_vente);
    }
    return min_price;
}

export const getMaxPrice=(tabArray)=>{
    let max_price=0;
    if(tabArray.length>0){
        let prod_infos=tabArray.reduce(function(prev, curr) {
            return  parseInt(curr.prix_vente) > parseInt(prev.prix_vente) ? curr : prev;
        });
        max_price=parseInt(prod_infos.prix_vente);
    }
    return max_price;
}