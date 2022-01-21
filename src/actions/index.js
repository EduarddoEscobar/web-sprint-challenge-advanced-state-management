import axios from 'axios';

export const START_SMURF_FETCH = 'START_SMURF_FETCH';
export const SMURF_FETCH_SUCCESS = 'SMURF_FETCH_SUCCESS';
export const SMURF_FETCH_FAILURE = 'SMURF_FETCH_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'SET_ERROR';

export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch(startSmurfFetch());
        axios.get('http://localhost:3333/smurfs')
            .then(resp => {
                console.log(`Data being sent ${resp}`);
                dispatch(smurfFetchSuccess(resp.data));
            }).then(error => dispatch(smurfFetchFailure(error)));
    }
}

export const startSmurfFetch = () => {
    return({type: START_SMURF_FETCH});
}

export const smurfFetchSuccess = (smurf) => {
    return({type: SMURF_FETCH_SUCCESS, payload: smurf});
}

export const smurfFetchFailure = (error) => {
    return({type: SMURF_FETCH_FAILURE, payload: error});
}

export const addSmurf = (smurf) => {
    return({type: ADD_SMURF, payload: smurf});
}

export const setError = (error) => {
    return({type: SET_ERROR, payload: error});
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.