const getFromLS = (cart)=>{
    const json = localStorage[cart];
    if(json){
        const arr = JSON.parse(json);
        return arr;
    }
    return [];
}

const addToLS = (cart,arr)=>{
    localStorage[cart] = JSON.stringify(arr);
}

export {getFromLS, addToLS};