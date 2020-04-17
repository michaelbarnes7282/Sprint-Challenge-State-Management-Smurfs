import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_START' })
        axios
            .get('http://localhost:3333/smurfs')
            .then(res => {
                console.log(res)
                dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_SMURF_FAILURE',
                    payload: err
                });
            });

    };
};

export const postSmurf = (data) => {
    console.log('data', data)
    console.log('dataname ', data.name)
    return dispatch => {
        dispatch({ type: 'FETCH_SMURF_START' })
        axios
        .post('http://localhost:3333/smurfs', {
            name: data.name,
            age: data.age,
            height: data.height
        })
        .then( res => {
            console.log('post', res)
            dispatch({ type: 'FETCH_SMURF_SUCCESS', payload: res.data})
        })
        .catch(err => {
            dispatch({
                type: 'FETCH_SMURF_FAILURE',
                payload: err
            })
        })
    };
};