import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import axios from 'axios'

function ModalMovie(props) {
    const addToFav = (item) => {
        const URL = `http://localhost:3007/addMovie`
        axios.post(URL, item)
        console.log(item);
    }
    ;
    return (
        <>
            <Modal show={props.show} >
                <Modal.Header closeButton onHide={props.handleClose}>
                    <Modal.Title style={{ textAlign: 'center' }}>{props.data.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image style={{ maxWidth: '300px', marginLeft: '70px' }} src={props.pp + props.data.poster_path}></Image>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose} >
                    Close
                </Button>
                <Button variant="primary" onClick={() => { addToFav(props.data) }}>
                    Add to the DB
                </Button>
            </Modal.Footer>
        </Modal >
        </>
    )
}
export default ModalMovie;