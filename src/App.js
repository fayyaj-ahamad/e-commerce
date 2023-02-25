import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Product from './pages/Product';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import { Provider } from 'react-redux';
import store from './store/store';
import Cart from './pages/Cart';
function App() {
  return (
    <div className="App">
    <Provider store={store}>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />}/>
      <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  
  );
}

export default App;
