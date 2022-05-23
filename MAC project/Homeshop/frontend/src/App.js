import './App.css';
import PrimaryNavbar from './components/Navbar';
import Prodcard from './components/Prodcard';
import data from './components/data';

function App() {
  return (
    <div className="App">
      <PrimaryNavbar/>
      <main>
        <div className='prod_grid'>
          {data.prods.map(product =>(
            <Prodcard key={product._id} product={product}></Prodcard>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
