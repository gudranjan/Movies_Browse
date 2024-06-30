
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import Home from './components/Home';

import Error from './components/Error';
import MoviesSingle from './components/MoviesSingle';
 
import React from 'react' 

const App = () => {

  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='movies/:id' element={<MoviesSingle/>}/>
<Route path='*' element={<Error/>}/>

 </Routes>
    
    </BrowserRouter>
    
    
    
    </>
  )
}

export default App


