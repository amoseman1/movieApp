import React, { useEffect, useState } from 'react'
import API from '../utils/API';
import MovieCard from '../components/MovieCard/MovieCard'
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

            <div>{console.log(data)}

                {data.map(data => {

                    return (
                        <MovieCard
                            key={data.id}
                            poster={data.poster}
                            title={data.title}
                            year={data.price}
                        />
                    )
                })

                }
            </div>



        </>
    )
}


