import { useDispatch } from 'react-redux';
import { login } from '../../../features/auth/AuthSlice';
import { useNavigate } from 'react-router-dom';
import "./LoginScreen.css"


export default function LoginScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    const fakeUser = { username: 'john', email: 'bob@example.com' };
    dispatch(login(fakeUser));
    navigate('/home');
  };

  return (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh"}}>
    <div className='container'>
         <div className='input-feild'>Username</div>
         <div className='input-feild'>Password</div>
         <div className='button' onClick={handleLogin}>Login</div>
    </div>
  </div>
  )
}