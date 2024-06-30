import React from 'react'
import { useParams } from 'react-router-dom';
import { Api } from './Context';
import {useState, useEffect} from 'react'
import './single.css'

const MoviesSingle = () => {
    const {id}=useParams();
    const[movie,setmovie]=useState("");





const fetchApi= async (Api_Url)=>{
    try{
const data= await fetch(Api_Url);
const datas= await data.json();
console.log(datas);
setmovie(datas);






    }
    catch(Err){
        console.log(Err);
    }
}





    useEffect(()=>
    {

fetchApi(`${Api}&i=${id}`);


    },[])
  return (
    <>
    <section>

<div className='outer' >
    <div className='outer_1'>
    <img src={movie.Poster} alt='phou' className='img_2'/>
<div className='inner'>
    <div>{movie.Genre}</div>
    <div>{movie.Director}</div>
    

</div>
    </div>



</div>



    </section>
    
    
    </>
  )
}

export default MoviesSingle