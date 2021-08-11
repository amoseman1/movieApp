import React, { useEffect, useState } from 'react'
import API from '../utils/API';
import MovieCard from '../components/MovieCard/MovieCard'
import SearchBar from '../components/SearchBar'

// import Button from 'react-bootstrap/Button'

export default function Homepage() {
    const [data, setData] = useState([])


    useEffect(() => {
        loadMovies();

    }, []
    );

    function loadMovies() {
        API.getMovies()
            .then(res => {
                console.log(res.data)
                setData([...res.data])
            })

            .catch(err => console.log(err))
    }


    return (
        <>
            <SearchBar />
            <div>{console.log(data)}

                {data.map(data => {

                    return (
                        <MovieCard
                            key={data.id}
                            description={data.description}
                            title={data.title}
                            price={data.price}
                        />
                    )
                })

                }
            </div>



        </>
    )
}


