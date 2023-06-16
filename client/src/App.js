import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Footer from './pages/Footer';
import Sneaker from './pages/Sneaker';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />}/>
        <Route path='/sneakers' element={<Sneaker />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
