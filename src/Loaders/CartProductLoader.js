import { getShoppingCart } from "../utilities/fakedb"

const cartProductLoader = async () => {
    const loaderProduct = await fetch('products.json')
    const products = await loaderProduct.json()
    console.log(products)

    // if your data in database you have to use in async await

    const storeCart = getShoppingCart()
    const saveCart = [];

    for(const id in storeCart){
        const addedProduct = products.find(pd => pd.id===id)
        if(addedProduct){
            const quantity = storeCart[id];
            addedProduct.quantity = quantity
            saveCart.push(addedProduct)
        }
    }

    return saveCart;
}
export default cartProductLoader;