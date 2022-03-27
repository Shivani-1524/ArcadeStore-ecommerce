import './App.css';
import { HomePage, LoginPage, LogoutPage, SignupPage } from './Pages/index'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>

  );
}

export default App;
