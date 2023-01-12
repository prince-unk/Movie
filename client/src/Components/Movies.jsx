import React from 'react'
import { useState } from 'react'
import Card from './Card'

const Movies = () => {
    const [result, setresult] = useState([]);
    const [searchMovie, setsearchmovie] = useState("");
    let searchvalue;
    const handleInputChange = (A) => {
        searchvalue = A.target.value;
        // console.log(searchvalue);
        setsearchmovie(searchvalue);

        // console.log(searchMovie);
    }
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b337bffaf8msh970dfd9b53b0620p1b64b4jsne08ea941d857',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    let url1 = 'https://api.themoviedb.org/3/search/movie?api_key=58e4b615a86a14cebb48ad1e3c73d310&language=en-US&query=';
    let url2 = searchMovie;
    let url = url1 + url2;

    const fetchdata = async () => {
        const DATA = await fetch(url)
        const Moviedata = await DATA.json();
        // console.log(Moviedata);
        setresult(Moviedata.results);

    }
    console.log(result);

    // fetch(url  , options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));
    return (
        <>
            <div className='main'>
                <div className='top'>
                    <form>
                        <input type="text" id="filter" placeholder="Search" onChange={handleInputChange} />
                    </form>
                    <button onClick={fetchdata}>Search</button>
                </div>
                <div className='middle'>
                    {result.map((movie) => {
                        return (
                            <>
                            <Card key={movie.id} movie={movie} />
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default Movies
