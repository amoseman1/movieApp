import React from 'react'
import Card from 'react-bootstrap/Card'


export default function MovieCard(props) {
    return (
        <Card>
            <h2>For Sale"</h2>
            <p>{props.price}</p>
            <p>{props.title} </p>
            <p>{props.description}</p>
        </Card>
    )
}