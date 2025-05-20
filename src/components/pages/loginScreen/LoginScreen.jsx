import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth/AuthSlice';
import { useNavigate } from 'react-router-dom';


export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = { username: 'john', email: 'john@example.com' };
    dispatch(login(fakeUser));
    navigate('/home');
  };

  return <button onClick={handleLogin}>Login</button>;
}