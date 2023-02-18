import React from 'react'
import { useState, useEffect } from 'react'
import '../css/Card.css'


const Card = ({ movie }) => {
    const [searchMovie, setsearchmovie] = useState("");
    const getMore = async () => {

        // console.log(movie.id);
        let api1 = "https://api.themoviedb.org/3/movie/";
        let api2 = movie.id;
        let api3 = "?api_key=58e4b615a86a14cebb48ad1e3c73d310&language=en-US";

        let api = api1 + api2 + api3;

        const DATA2 = await fetch(api)
        const Moviedata2 = await DATA2.json();
        // console.log(Moviedata2);

        // const imageurl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;

        setsearchmovie(Moviedata2);
        console.log(searchMovie);
    }
    return (
        <>
            <div className='card_main'>
                <div className='top'><h2>{movie.title}</h2></div>
                <h2 style={{display:"none"}}>{movie.id}</h2>
                <div className='middle'><img src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path} alt={movie.path} /></div>
                <div className='bottom' onClick={getMore}><button>Read More</button></div>
                <div>Budget : {searchMovie.budget}</div>
                {/* <div >
                    {searchMovie.genres.map((i) => {
                        return (
                            <>
                                <h1>{i.name}</h1>
                            </>
                        )
                    })}
                </div> */}

            </div>

            {/* <div style={{ backgroundImage: `url(${"https://image.tmdb.org/t/p/w500" + movie.backdrop_path})` }} className="movie-card">
                <div className="overlay">
                    <div className="card-header">
                        <div className="release-date">
                            <h4>Released: {movie.release_date}</h4>
                        </div>
                        <div className="movie-content">
                            <div className="content">
                                <h1>{movie.title}</h1>
                                <h4 className="movie-text">{movie.overview}<a href="#">Read More</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </>



    )
}

export default Card
