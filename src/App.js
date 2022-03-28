import './App.css';
import { HomePage, LoginPage, LogoutPage, SignupPage, SingleProduct, ShopPage, CartPage } from './Pages/index'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/singleprod" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>

  );
}
export default App;
