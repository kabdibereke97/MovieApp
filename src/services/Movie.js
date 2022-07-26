import { useState, useEffect } from "react";

const Movie = (type) => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [movies, setMovies] = useState([]);
    const [tv, setTv]=useState([])
    const [genre, setGenre]=useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/${type}/popular?api_key=5c56c777fdd2196e5802f67162bd26e0`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setMovies(result.results);
              setTv(result.results)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])

    useEffect(() => {
      fetch(`https://api.themoviedb.org/3/genre/${type}/list?api_key=5c56c777fdd2196e5802f67162bd26e0&language=en-US`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setGenre(result.genres)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
  }, [])

    return {error, isLoaded, movies, tv,genre}
}

export default Movie