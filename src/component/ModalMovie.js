import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ModalMovie(props) {

    const addToFav = (item, comment) => {
        console.log(comment);
        const URL = `http://localhost:3007/addMovie`

        const data={
            ...item,
            comment:comment
        }
        axios.post(URL, data)
        console.log(item);
        props.handleClose();

    }
    const [comment,setComments]=useState('')
    return (
        <>
            <Modal show={props.show} >
                <Modal.Header closeButton onHide={props.handleClose}>
                    <Modal.Title style={{ textAlign: 'center' }}>{props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image style={{ maxWidth: '300px', marginLeft: '150px', height: '200px' }} src={props.pp + props.data.poster_path}></Image>
                   
                    <Form >
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Add Comment here</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="comments"
                                value={comment}
                                onChange={(e) => setComments(e.target.value)}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose} >
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => { addToFav(props.data, comment) }}>
                        Add to the DB
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    )
}
export default ModalMovie;
