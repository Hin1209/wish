import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import Login from './Pages/Login';
import Matewish from './Pages/Matewish';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;