import Movie from './Movie'

function MovieList(props) {
    
    return (
        props.movie.map(item =>
            <Movie movie={item} key={item.id} />
        )
    )
}
export default MovieList;