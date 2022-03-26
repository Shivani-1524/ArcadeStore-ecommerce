import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import LoginPage from './Pages/AuthPages/LoginPage';
import LogoutPage from './Pages/AuthPages/LogoutPage';
import SignupPage from './Pages/AuthPages/SignupPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
