import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Kawasaki from './pages/kawasaki/Kawasaki';
import Honda from './pages/honda/Honda';
import KTM from './pages/ktm/KTM';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/kawasaki' element={<Kawasaki />}></Route>
        <Route path='/honda' element={<Honda />}></Route>
        <Route path='/ktm' element={<KTM />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
