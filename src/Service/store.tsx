import create from 'zustand';
import  {
    addSameProdInCart,
    addToCart,
    deleteFromCart, Login, Logout,
    removeSameProdInCart,
    setProduct,
} from './Product/productRepository';
import {DATA_STATE} from './Utils/dataState';
import {store} from '../Domain/Models/Store';
import {Product} from '../Domain/Models/Product';
import {login} from "../Domain/Models/Login";

export const useStore = create<store>((set) => {
    return ({
        login: {},
        bears: 0,
        product: [],
        totalPrice: 0,
        cart: [],
        totalQnt: 0,
        loading: DATA_STATE.NOT_INITIALIZED,
        setProduct: (product: Product) => setProduct({set, product}),
        addToCart: (product: Product) => addToCart({set, product}),
        addSameProdInCart: (product: Product) => addSameProdInCart({set, product}),
        removeSameProdInCart: (product: Product) =>
            removeSameProdInCart({set, product}),
        deleteFromCart: (product: Product) => deleteFromCart({set, product}),
        Login: (credential: login) => Login({set, credential}),
        Logout: () => Logout({set})
    })
});
