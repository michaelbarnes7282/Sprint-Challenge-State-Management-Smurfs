import React from 'react';

const Smurf = props => {
    console.log(props)
    return (
        <div className='card'>
            <h3>{props.data.name}</h3>
            <p>{props.data.age}</p>
            <p>{props.data.height}</p>
        </div>
    )
}

export default Smurf;