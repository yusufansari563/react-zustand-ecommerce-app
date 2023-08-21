import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserProfile from './Presentation/scene/Profile/UserProfile';
import Chat from './Presentation/scene/chat/Chat';
import Cart from './Presentation/scene/Cart/Cart';
import Login from './Presentation/scene/Auth/Login';
import ProtectedRoute from './Presentation/utils/ProtectedRoute';
import Loader from './Presentation/components/Loader/Loader';
import SingleProduct from './Presentation/scene/singleProduct/SingleProduct';

const Product = React.lazy(
  () => import('./Presentation/scene/Product/product')
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path={'/'} element={<ProtectedRoute />}>
            <Route path='/' element={<Product />} />
            <Route path='/user' element={<UserProfile />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<SingleProduct />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
