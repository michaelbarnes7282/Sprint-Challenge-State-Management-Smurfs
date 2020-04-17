import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import Smurf from './Smurf'

import { fetchSmurf } from '../store/actions/smurfActions'


const Smurfs = props => {
    const [smurfs, setSmurfs] = useState();
    useEffect(() => {
        props.fetchSmurf();
    }, [smurfs]);

    return(
        <div className='smurfs'>
        {props.smurf.map(smurf => (
            <Smurf key={smurf.id} data={smurf} />
        ))}
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        smurf: state.smurf.smurf,
        isFetching: state.smurf.isFetching,
        error: state.smurf.error
    }
}

export default connect(
    mapStateToProps,
    { fetchSmurf }
)(Smurfs);