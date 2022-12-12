import './App.css';
import { GroceryList } from './GroceryList';
import imageShopping from './shopping.jpg';
import imageShoppingMan from './man.jpg';

function App() {
  return (
    <div className="app">
      <div className="container">
        <img src={ imageShopping } width="200px" alt="shopping"/>
      </div>
      <div className="container">
        <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className="container">
        <img src={ imageShoppingMan } width="200px" alt="shopping man"/>
      </div> 
    </div>
  );
}

export default App;
