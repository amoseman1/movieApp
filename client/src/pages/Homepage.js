import React, { useEffect, useState } from 'react'
import API from '../utils/API';
import MovieCard from '../components/MovieCard/MovieCard'
import SearchBar from '../components/SearchBar/SearchBar'
import { Container, Row, Col } from 'react-grid-system';

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
            <Container>
                <Row>
                    <Col sm={2}>Margin</Col>
                    <Col med={8}>
                        <div>
                            {/* {console.log(data)} */}

                            {data.map(data => {

                                return (
                                    <MovieCard
                                        key={data.id}
                                        image={data.image}
                                        description={data.description}
                                        title={data.title}
                                        price={data.price}
                                    />
                                )
                            })

                            }
                        </div>
                    </Col>
                    <Col sm={2}>Margin</Col>
                </Row>
            </Container>


        </>
    )
}


