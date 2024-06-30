
import { useGlobalContext } from './Context'
import './search.css'

const Search = () => {
const{search,setsearch,change}=useGlobalContext();
   


  return (
    <>
    <div className='main_2'>
        <div className='sub_main'>
        <form onSubmit={(e)=>{e.preventDefault()}}>

<input type="text" placeholder='Search' id='new'className='balu_sir' value={search} onChange={(e)=>{
setsearch(e.target.value)
}}/>

<button onClick={change}>Click</button>



    </form>
        </div>
   


    </div>
   
    
    
    
    
    
    </>
  )
}

export default Search