import { Product } from './Product';
import { login } from '../Models/Login';

export interface store {
  login: login;
  bears: number;
  product: [];
  totalPrice: number;
  cart: [];
  totalQnt: number;
  loading: String;
  setProduct: (product: Product) => void;
  addToCart: (product: Product) => void;
  addSameProdInCart: (product: Product) => void;
  removeSameProdInCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
  Login: (auth: login) => Promise<void>;
  Logout: () => Promise<void>;
}
