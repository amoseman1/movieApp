import React, { useEffect, useState } from 'react'
import API from '../utils/API';


export default function Homepage() {
    const [data, setData] = useState([])

    useEffect(() => {
        loadMovies();
    }, []
    );

    function loadMovies() {
        API.getMovies()
            .then(res => {
                // console.log(res.data)
                setData(res.data)
            })
            .catch(err => console.log(err))
    }


    return (
        <>




        </>
    )
}


