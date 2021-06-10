import React from 'react'
import Card from 'react-bootstrap/Card'


export default function MovieCard(props) {
    return (
        <Card>
            <h2>Hey there</h2>
            {props.price} {props.title} {props.description}
        </Card>
    )
}