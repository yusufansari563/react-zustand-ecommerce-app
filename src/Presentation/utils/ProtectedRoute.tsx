import React, { useEffect } from 'react';
import { useStore } from '../../Service';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import SideNavBar from '../components/Navbar/SideNavBar';
import Container from '../components/Container';
import Tab from '../components/Navbar';
import useAuth from '../Hooks/useAuth';

const ProtectedRoute = () => {
  useAuth();

  return (
    <>
      <Container>
        <NavBar />
        <div className={'flex w-full mt-16 h-auto'}>
          <SideNavBar />
          <div className='w-4/5 mx-auto mt-10 md:mt-10 flex justify-center'>
            <Outlet />
          </div>
        </div>
      </Container>
      <Tab />
    </>
  );
};

export default ProtectedRoute;
