import React, { useState } from 'react'
// import Card from 'react-bootstrap/Card'
import './MovieCard.css'
// import Button from 'react-bootstrap/Button'
import { Modal, Button, Card } from 'react-bootstrap'

//import Image from 'react-bootstrap/Image'


export default function MovieCard(props) {

    const [showModal, setShow] = useState(false);

    const toggleModal = async () => {
        setShow(!showModal)
    }
    function addtoCart() {
        alert("Your item has been added")
    }

    return (<>

        <div onClick={toggleModal} >
            <Card id="itemCard" >

                <img id="itemImage" src={props.image} alt="item for sale" />
                <p>$ {props.price}</p>
                <p>{props.title} </p>
                <Button id="cartButton" onClick={addtoCart}>Add to Cart</Button>

                <Modal show={showModal} onHide={toggleModal}>

                    <Modal.Header closeButton>
                        <Modal.Title id="modalTitle">{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body id="modalBody">{props.description}</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={toggleModal}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>

            </Card>

        </div>

        {/* </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer> 
        </Modal>


        {/* // <Card id="itemCard" >
        //     <Button onClick={handleShow}>
        //         <img id="itemImage" src={props.image} alt="item for sale" />
        //         <p>$ {props.price}</p>
        //         <p>{props.title} </p>
        //         <p id="description">{props.description}</p> 
        {/* //         <Button id="cartButton" onClick={addtoCart}>Add to Cart</Button>
        //     </Button> 
        // </Card> */}


    </>
    )
}