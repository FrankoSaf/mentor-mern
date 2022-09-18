import './App.css';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Profile from './pages/Profile/Profile';
function App() {
  return (
    <Routes>
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile' element={<Profile />} />
    </Routes>
  );
}

export default App;
