import m from "../../assests/m";
import { ADD_MOVIE } from "../Constants/actions-types";

const initialState = {
    movies:m
}
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                movies: [...state.movies, action.payload]
            }
        default:
            return state
    }
}

export default rootReducer