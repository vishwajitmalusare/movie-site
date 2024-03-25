import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Pages/movies'

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path ="/" Component={Movies} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
