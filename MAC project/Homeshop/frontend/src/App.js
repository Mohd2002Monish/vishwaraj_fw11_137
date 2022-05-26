import './App.css';
import PrimaryNavbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PrimaryNavbar />
        <main>
          <Routes>
            <Route path="/product/:_id" element={<ProductScreen />}></Route>
            <Route path="/" element={<HomeScreen />}></Route>
          </Routes>
          <Footer></Footer>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
