import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/auth/AuthSlice';

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div>
      <h1>Welcome, {user?.username}</h1>
       <h1>Welcome, {user?.email}</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
}