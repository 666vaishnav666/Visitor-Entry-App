import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVisitor from './components/AddVisitor';
import ViewAll from './components/ViewAll';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddVisitor/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
