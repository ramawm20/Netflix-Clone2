import axios from "axios";
import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateModal from "./UpdateModal";

function FavList() {
    const [favM, setfavm] = useState([]);
    const getfavmovies = () => {
        const URL = `http://localhost:3007/favMovies`
        fetch(URL)
            .then((data) => {
                data.json().then((response) => {
                    setfavm(response)
                    console.log(response);
                })
            })
    }

    useEffect(() => {
        getfavmovies()
    }, [])

    const pp = "http://image.tmdb.org/t/p/w500/"

    const deleteMovie = async (id) => {
        const URL = `http://localhost:3007/deleteMovie/'${id}'`
        const result = await axios.delete(URL, id)
        console.log(result);

    }
    const [show,setshow]=useState(false)
    const handleupdate=()=>{
        setshow(true)

    }
    const handleClose=()=>{
        setshow(false)
    }
    return (
        <>
            <h1 style={{ color: 'whitesmoke' }}>Favorite list</h1>


            {favM.map((item) => {
                return (<div key={item.id}>
                    <br />
                    <Card style={{ width: '30rem', color: 'black' }}>
                        <Card.Img variant="top" src={pp + item.poster_path} />
                        <Card.Body>
                            <Card.Title style={{ color: 'green', fontSize: '30px' }} >{item.original_title}</Card.Title>
                            <Card.Text>
                                {item.overview}

                            </Card.Text>
                            <Card.Text>
                                {`Comment= ${item.comment}`}

                            </Card.Text>
                            <Button variant="danger" onClick={() => { deleteMovie(item.id) }}>Delete</Button>
                            <Button variant="warning" style={{ marginLeft: '30px' }} onClick={() => { handleupdate(item.id) }}>Update Comment</Button>
                        </Card.Body>
                    </Card>
                    <br />

                </div>
        
                )
            })}
             <UpdateModal show={show} handleClose={handleClose}/>
        </>
    )
}
export default FavList;