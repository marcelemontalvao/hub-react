import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home/Home.jsx';
import Login from './components/pages/Login/Login.jsx';
import Register from './components/pages/Register/Register.jsx';
import './AppStyles.js';
import { AuthProvider } from './components/Contexts/AuthContext.jsx';
import { TechProvider } from './components/Contexts/TechContext.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <TechProvider>
            <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard' element={<Home />} />
            </Routes>
          </TechProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;