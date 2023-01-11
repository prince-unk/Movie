import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Movies = () => {
    const [searchMovie, setsearchmovie] = useState("");
    let searchvalue;
    const handleInputChange = (A) => {
        searchvalue = A.target.value;
        // console.log(searchvalue);
        setsearchmovie(searchvalue);

        console.log(searchMovie);
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b337bffaf8msh970dfd9b53b0620p1b64b4jsne08ea941d857',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    let url1 = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=';
    let url2 = searchMovie;
     let url = url1 + url2;


    fetch(url  , options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    return (
        <>
            <div className='main'>
                <div className='top'>
                    <form>
                        <input type="text" id="filter" placeholder="Search" onChange={handleInputChange} />
                    </form>
                </div>
                <div className='middle'>
                   {
                    response.d.map((el)=>{
                     return(
                        <>
                        
                        </>
                     )

                    })
                   }
                    <Card />
                </div>
            </div>
        </>
    )
}

export default Movies
