import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ChildDash from './pages/ChildDash';

import Navigationbar from './components/Navigationbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
      <Router>
      <AuthProvider>
      <Navigationbar />

        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route 
            path='/' 
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route
            path='/dash'
            element={
              <ProtectedRoute>
                <ChildDash />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
