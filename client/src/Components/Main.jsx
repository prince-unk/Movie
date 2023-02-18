import React, { useEffect, useState } from 'react'
import Movies from './Movies'
import '../css/Main.css'

const Main = () => {
    // const popularapi = "https://api.themoviedb.org/3/movie/popular?api_key=58e4b615a86a14cebb48ad1e3c73d310";
    // const [popapi, setPopapi] = useState([]);
    // const [userdataapi, setUserDataapi] = useState([]);
    // useEffect(() => {
    //     fetchPopular();
    // }, []);

    return (
        <>
            <div className='page'>
                <Movies />
            </div>
        </>
    )
}

export default Main
