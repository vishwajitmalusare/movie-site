import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Pages/movies';
import MovieDetails from './Pages/moviedetails';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path ="/" Component={Movies} />
    <Route path ="/moviedetails" Component={MovieDetails} />
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
