import React from 'react'
import { useState, useEffect } from 'react'
import Card from './Card'
import '../css/Movies.css'

const Movies = () => {
    const [result, setresult] = useState([]);
    const [result2, setresult2] = useState([]);
    const [searchMovie, setsearchmovie] = useState("");
    let searchvalue;
    const handleInputChange = (A) => {
        searchvalue = A.target.value;
        // console.log(searchvalue);
        setsearchmovie(searchvalue);

        // console.log(searchMovie);
    }

    let url1 = 'https://api.themoviedb.org/3/search/movie?api_key=58e4b615a86a14cebb48ad1e3c73d310&language=en-US&query=';
    let url2 = searchMovie;
    let url = url1 + url2;

    const fetchdata = async () => {
        const DATA = await fetch(url)
        const Moviedata = await DATA.json();
        console.log(Moviedata);
        setresult(Moviedata.results);

    }


    // useEffect(() => {
    //     fetchdata2();
    // }, [])

    return (
        <>
            <div className='main'>
                <div className='top'>
                    <form>
                        <input className='searchfield' type="text" id="filter" placeholder="Search" onChange={handleInputChange} />
                    </form>
                    <button className='btn' onClick={fetchdata}>Search</button>
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

                    {/* {
                        // useEffect(async () => {
                            result.map((movie2) => {

                                let api1 = "https://api.themoviedb.org/3/movie/";
                                let api2 = movie2.id;
                                let api3 = "?api_key=58e4b615a86a14cebb48ad1e3c73d310&language=en-US";

                                let api = api1 + api2 + api3;



                                const DATA2 = await fetch(api)
                                const Moviedata2 = await DATA2.json();
                                // console.log(Moviedata);
                                setresult2(Moviedata2.results);



                                return (
                                    <>
                                        <h1>{result2[0].id}</h1>
                                    </>
                                )
                            })
                        // }, [])

                    } */}
                </div>
            </div>
        </>
    )
}

export default Movies
