import { Product } from '../../Domain/Models/Product';
import { DATA_STATE } from '../Utils/dataState';
import { login } from '../../Domain/Models/Login';

interface storeObservable {
  set: any;
  product: Product;
}

export async function setProduct({ set, product }: storeObservable) {
  return set(() => ({ product: product, loading: DATA_STATE.INITIALIZED }));
}

export async function addToCart({ set, product }: storeObservable) {
  return set((state: any) => ({
    cart: [...state.cart, { ...product, total: 1 }],
  }));
}

export async function deleteFromCart({ set, product }: storeObservable) {
  return set((state: any) => ({
    cart: state.cart.filter((item: any) => item.id !== product.id),
  }));
}

export async function addSameProdInCart({ set, product }: storeObservable) {
  return set((state: any) => {
    const cart = state.cart.map((item: any) => {
      if (item.id === product.id) {
        item.total = parseInt(item.total) + 1;
      }
      return item;
    });

    return {
      cart: cart,
    };
  });
}

export async function removeSameProdInCart({ set, product }: storeObservable) {
  return set((state: any) => {
    const cart = state.cart.filter((item: any) => {
      if (item.id === product.id) {
        item.total = parseInt(item.total) - 1;
      }
      return item.total > 0;
    });

    return {
      cart: cart,
    };
  });
}

export async function Login({
  set,
  credential,
}: {
  set: any;
  credential: login;
}) {
  return set((state: any) => {
    return {
      login: credential,
    };
  });
}

export async function Logout({ set }: { set: any }) {
  return set((state: any) => {
    return {
      login: {},
    };
  });
}

const ProductRepository = (set: any) => {
  return {
    setProduct: (product: Product) => setProduct({ set, product }),
    addToCart: (product: Product) => addToCart({ set, product }),
    addSameProdInCart: (product: Product) =>
      addSameProdInCart({ set, product }),
    removeSameProdInCart: (product: Product) =>
      removeSameProdInCart({ set, product }),
    deleteFromCart: (product: Product) => deleteFromCart({ set, product }),
    Login: (credential: login): Promise<void> => Login({ set, credential }),
    Logout: () => Logout(set),
  };
};

export default ProductRepository;
