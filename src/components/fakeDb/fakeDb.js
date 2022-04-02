const setDataTofakeDb = id =>{
    let cart ={};

    const alreadySavedCart = localStorage.getItem('cart');
    if(alreadySavedCart){
        cart = JSON.parse(alreadySavedCart);
    }

    if(cart[id]){
        cart[id] = cart[id] + 1;
    }else{
        cart[id] = 1;
    }

    localStorage.setItem('cart',JSON.stringify(cart));
}


const getDataFromFakeDb = (getTShirts) =>{
    const getCart = JSON.parse(localStorage.getItem('cart'));
    let items = [];
    // console.log(getTShirts);
    for(const id in getCart){
        const item = getTShirts.find(tShirt => tShirt._id === id);
        if(item){
            items.push(item)
        }
    }
    return items;
    // console.log(items);
}

const removeItemFromFakeDb = id => {
    const getCart = JSON.parse(localStorage.getItem('cart'));
    delete getCart[id];
    localStorage.setItem('cart',JSON.stringify(getCart))
}

const clearDataFromFakeDb = () =>{
    localStorage.removeItem('cart');
}
export {setDataTofakeDb, getDataFromFakeDb,removeItemFromFakeDb,clearDataFromFakeDb};