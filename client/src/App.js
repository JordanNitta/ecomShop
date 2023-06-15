import { Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Register from './pages/Register';
import Footer from './pages/Footer';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/register' element={<Register />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
