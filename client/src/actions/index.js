import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem necessary to complete application.

export const GET_SMURFLIST_START = 'GET_SMURFLIST_START';
export const GET_SMURFLIST_SUCCESS = 'GET_SMURFLIST_SUCCESS';
export const GET_SMURFLIST_FAILURE = 'GET_SMURFLIST_FAILURE';
export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS';
export const ADD_SMURF_FAILURE = 'ADD_SMURF_FAILURE';
export const FORM_ERROR = 'FORM_ERROR';

export const getListStart = () => {

    return {
        type: GET_SMURFLIST_START
    }

}

export const getListSuccess = (smurfs) => {

    return {
        type: GET_SMURFLIST_SUCCESS,
        payload: smurfs
    }
}

export const getListFailure = (error) => {

    return {
        type: GET_SMURFLIST_FAILURE,
        payload: error
    }
}

export const addSmurfStart = () => {

    return {
        type: ADD_SMURF_START
    }
}

export const addSmurfSuccess = (smurfs) => {

    return {
        type: ADD_SMURF_SUCCESS,
        payload: smurfs
    }
}

export const addSmurfFailure = (error) => {

    return {
        type: ADD_SMURF_FAILURE,
        payload: error
    }
}

export const fetchSmurfs = () => (dispatch) => {

    dispatch(getListStart);

    axios.get('http://localhost:3333/smurfs')

    .then((res) => {
        console.log(res.data);
        dispatch(getListSuccess(res.data));
    })

    .catch((err) => {
        console.log(err);
        dispatch(getListFailure(err));
    })

}

export const addSmurf = (smurf) => (dispatch) => {

    dispatch(addSmurfStart);

    axios.post('http://localhost:3333/smurfs', smurf)

    .then((res) => {
        console.log(res.data);
        dispatch(addSmurfSuccess(res.data));
    })

    .catch((err) => {
        console.log(err);
        dispatch(addSmurfFailure(err));
    })

}

export const formError = (error) => {

    return {
        type: FORM_ERROR,
        payload: error
    }

}