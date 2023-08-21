import { useEffect } from 'react';
import { useStore } from '../../Service';
import { useNavigate } from 'react-router-dom';

function useAuth() {
  const navigate = useNavigate();
  const isAuthenticated = Object.keys(useStore((state) => state.login)).length;

  useEffect(() => {
    if (!isAuthenticated) navigate('/login');
  }, [isAuthenticated, navigate]);
}

export default useAuth;
