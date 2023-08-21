import { createBrowserRouter } from 'react-router-dom';
import Product from '../scene/Product/product';
import UserProfile from '../scene/Profile/UserProfile';
import Chat from '../scene/chat/Chat';
import Cart from '../scene/Cart/Cart';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Product />,
  },
  {
    path: '/user',
    element: <UserProfile />,
  },
  {
    path: '/chat',
    element: <Chat />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
]);

export default router;
