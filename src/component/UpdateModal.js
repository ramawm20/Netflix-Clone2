import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios'
import Form from 'react-bootstrap/Form';
import { useState } from 'react';



function UpdateModal(props) {
    const [comment,setComments]=useState('')

    const update=(comment,id)=>{
        const URL=`http://localhost:3007/deleteMovie/'${id}`
        
        console.log(comment);
        props.handleClose()

    }
        return (
        <>
            <Modal show={props.show} >
                <Modal.Header closeButton onHide={props.handleClose}>
                    <Modal.Title style={{ textAlign: 'center' }}>Update your comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                    <Button variant="primary" onClick={() => { update(comment,) }}>
                        Send New updates
                    </Button>
                </Modal.Footer>
            </Modal >

        </>
    )
}
export default UpdateModal;