import React from 'react'
import Card from 'react-bootstrap/Card'
import './MovieCard.css'
//import Image from 'react-bootstrap/Image'


export default function MovieCard(props) {
    return (
        <Card id="itemCard">
            <img id="itemImage" src={props.image} />
            <p>{props.price}</p>
            <p>{props.title} </p>
            <p>{props.description}</p>
        </Card>
    )
}