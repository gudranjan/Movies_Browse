import React, {  useContext, useEffect, useState } from "react";
// import { Context } from "react";


const Api=`https://www.omdbapi.com/?apikey=522c6cb8`;
const AppContext=React.createContext();
const AppProvider= ({children})=>{

const[movie,setmovie]=useState([]);
const[search,setsearch]=useState("titanic")

const change=()=>{
    fetchApi(`${Api}&s=${search}`);
}


const fetchApi= async (Api_Url)=>{
    try{
const data= await fetch(Api_Url);
const datas= await data.json();
console.log(datas);
setmovie(datas.Search);






    }
    catch(Err){
        console.log(Err);
    }
}





    useEffect(()=>
    {

fetchApi(`${Api}&s=${search}`);


    },[])


    return <AppContext.Provider value= {{movie,search,setsearch,change}}>{children} </AppContext.Provider>

    
}

const useGlobalContext= ()=>{
    return useContext(AppContext)
}
export {AppProvider ,useGlobalContext ,Api}