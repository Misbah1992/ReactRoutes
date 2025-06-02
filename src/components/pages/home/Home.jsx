import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/AuthSlice';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div style={{ display:"flex",alignItems:"center",flexDirection:"column" }}>
      <h1>Welcome, {user?.username}</h1>
      <h1>Welcome, {user?.email}</h1>
     
      <div style={{
        width: "10vw", height: "5vh", backgroundColor: 'darkcyan', display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color:"white"
      }} onClick={() => dispatch(logout())}>Logout</div>
    </div>
  );
}