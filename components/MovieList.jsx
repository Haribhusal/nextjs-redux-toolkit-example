import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux";
import { getMovies } from '../store/slices/movieSlice';




const MovieList = () => {

    const [moviesData, setMoviesData] = useState([]);




    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);


    const movies = useSelector((state) => state.movie.data.results);

    useEffect(() => {
        setMoviesData(movies)
    }, [movies])

    return (
        <div>
            {
                moviesData?.map((movie) => (
                    <h1 key={movie.id}>
                        {movie.title}
                    </h1>
                ))
            }
        </div>
    )
}

export default MovieList