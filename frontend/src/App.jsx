import './App.css';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import { UserContext } from './context/UserContext';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Navigation/Footer/Footer';
import Authentication from './pages/Auth/Authentication';
function App() {
  const { user } = useContext(UserContext);
  return (
    <div className='app'>
      <Navigation />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          {user ? (
            <>
              <Route path='/profile' element={<Profile />} />
              <Route path='*' element={<ErrorPage />} />
            </>
          ) : (
            <>
              <Route path='/auth' element={<Authentication />} />
              <Route path='*' element={<ErrorPage />} />
            </>
          )}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
