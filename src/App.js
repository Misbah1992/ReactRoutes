import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginScreen from "./components/pages/loginScreen/LoginScreen";
import PrivateRoute from './components/privateRoute/PrivateRoute';
import Home from './components/pages/home/Home';

function App() {
  return (
   
     <Router>
      <Routes>
      
        <Route path="/" element={<LoginScreen />} />

        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  
  );
}

export default App;
