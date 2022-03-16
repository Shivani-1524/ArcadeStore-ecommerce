import './App.css';
import { HomePage } from './Pages/HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
