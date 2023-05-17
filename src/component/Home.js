import { useEffect, useState } from "react";
import MovieList from './MovieList'

function Home(){

    const [movie,setmovie]=useState([]);

    const getAllMovie=()=>{
        const URL=`http://localhost:3007/trending`
        fetch(URL)
        .then((data)=>{
            data.json().then((response)=>{
                console.log(response);
                setmovie(response)
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    useEffect(()=>{
        getAllMovie()
    },[])


    return(
        <>  
        <MovieList movie={movie}/>     
        </>
    )
}
export default Home;