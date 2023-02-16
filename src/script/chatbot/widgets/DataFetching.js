import React, {useState, useEffect} from "react";
import axios from "axios";

function DataFetching({url}) {

    const [movies, setMovies] = useState([])

    console.log(url)

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setMovies(res.data.results)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <ul>
            { movies.map( movie => 
                <li key={movie.id}>
                    {movie.title}
                </li>)
            }
        </ul>
    )
}

export default DataFetching