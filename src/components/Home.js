import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from './Context'
import Search from './Search';
import './Style.css'

const Movies = () => {
const {movie}=useGlobalContext();

  return (
    <>
    <Search/>
      <section className='main_1'>
        <div  className='girid'>{



        movie.map((e)=>{
            const {Title,Poster,imdbID} =e;
            return(
                
                


                <NavLink to={`movies/${imdbID}`} key={imdbID}>
                  <div className='inside_div'>
                  <h2>{Title}</h2>
                <img src={Poster} alt='pho' className='img'/>
                  </div>
                

                </NavLink>
            )
        
        
            
        })}
        </div>
      </section>
        
    
    </>
  )
}

export default Movies;