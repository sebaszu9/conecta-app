import './App.css';
import Home from './components/home/home';
import Register from './components/register/register';
import Vote from './components/votacion/votacion';
import Navbar from './components/navbar/navbar';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Navbar />

          <Routes>
            <Route path="/*" element={ <Home /> } />
            <Route path="/register" element={ <Register /> }/>
            <Route path="/vote" element={ <Vote /> }/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
