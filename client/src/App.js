import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import Footer from './pages/Footer';
import Sneaker from './pages/Sneaker';
import OneProduct from './pages/OneProduct';
import HomePage from './pages/HomePage';
import { UserProvider } from './context/UserContext';
function App() {
  return (
    <>
    <UserProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/sneakers' element={<Sneaker />}/>
          <Route path='products/:id' element={<OneProduct />} />
        </Routes>
        <Footer />
    </UserProvider>
    </>
  );
}

export default App;
