import './App.css';
import { HomePage, ProfilePage, LoginPage, LogoutPage, SignupPage, SingleProduct, ShopPage, CartPage, WishlistPage } from './Pages/index'
import Test from './Pages/Test.js'
import { Routes, Route } from 'react-router-dom';
import Toast from './Components/Toast/Toast'

function App() {
  return (
    <div className="App">
      <Toast />
      <Routes>
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/singleprod" element={<SingleProduct />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/mock" element={<Test />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>

  );
}
export default App;
