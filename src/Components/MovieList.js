
import MovieCard from "./MovieCard";

import 'bootstrap/dist/css/bootstrap.css'

import { connect } from 'react-redux'
//Connect the component to get the state voir cours exmple 4/6
const mapStateToProps = state => {
    return {
        movies: state.movies
    }
}
const MovieList=({movies})=>{
  return(
      <div style={{display:"flex"}}>
      {movies.map(movie => (
      <MovieCard movie={movie}  />
    ))}
      </div>
      
  );
}
export default  connect(mapStateToProps)( MovieList) ;
/*
const MovieList=({movies})=>{
    return(
        <div style={{display:"flex"}}>
        {movies.map(movie => (
        <MovieCard movie={movie}  />
      ))}
        </div>
        
    );
}
export default MovieList ;
*/