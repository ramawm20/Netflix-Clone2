import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ModalMovie from './ModalMovie';

function Movie(props) {
   
    const [show,setshow]=useState(false);
    const handleshow=()=>{
        setshow(true)
    }
    const handleClose=()=>{
        setshow(false)
    }

    const pp = "http://image.tmdb.org/t/p/w500/"
    return (
        <>
            <br />
            <Card style={{ width: '30rem', color: 'black' }}>
                <Card.Img variant="top" src={pp + props.movie.poster_path} />
                <Card.Body>
                    <Card.Title style= {{ color: 'green',fontSize:'30px' }} >{props.movie.original_title}</Card.Title>
                    <Card.Text>
                        {props.movie.overview}
                    </Card.Text>

                    <Button variant="primary" onClick={handleshow}>Add to Favorite</Button>
                </Card.Body>
            </Card>
            <br />
            <ModalMovie show={show} handleClose={handleClose} data={props.movie} pp={pp}/>
        </>
    )
}
export default Movie;