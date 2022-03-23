import './App.css';
// import { HomePage } from './Pages/HomePage/HomePage';
import ShopPage from './Pages/ShopPage/ShopPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* <Route path="/" exact element={<HomePage />} /> */}
          <Route path="/" exact element={<ShopPage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
