import { ADD_MOVIE } from "../Constants/actions-types";
export const addMovie=(newMovie)=>{return (
    {
        type:ADD_MOVIE,
        payload :newMovie,
        
    })};
