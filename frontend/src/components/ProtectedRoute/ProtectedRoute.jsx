import { useSelector } from 'react-redux';
import { isLogged } from '../../redux/sliceLogin';

import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isLogin = useSelector(isLogged);
  
  return !isLogin
    ? <Navigate to='/'/>
    : children
}