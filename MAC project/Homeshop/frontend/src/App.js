import './App.css';
import PrimaryNavbar from './components/Navbar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <PrimaryNavbar/>
      <main>
        <Routes>
        <Route path='/product/:id' element={<ProductScreen/>}></Route>
        <Route path='/' element={<HomeScreen/>}></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
