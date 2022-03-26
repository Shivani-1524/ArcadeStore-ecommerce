import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import { ShopPage } from './Pages/ShopPage/ShopPage';
import SingleProduct from './Pages/ShopPage/SingleProduct';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/singleprod" element={<SingleProduct />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
