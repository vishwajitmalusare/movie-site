import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './Pages/movies';
import MovieDetails from './Pages/moviedetails';
import Login from './Pages/login';
import Registeration from './Pages/registration'
import PageNotFound from './Pages/pagenotfound';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path ="/" Component={Login} />
    <Route path ="/login" Component={Login} />
    <Route path ="/dashboard" Component={Movies} />
    <Route path ="/registration" Component={Registeration} />
    <Route path ="/moviedetails" Component={MovieDetails} />
    <Route path ="*" Component={PageNotFound}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
