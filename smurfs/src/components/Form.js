import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'

import { postSmurf } from '../store/actions/smurfActions'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Name',
            age: 'Age',
            height: 'Height'
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name
        this.setState({
            [name]: value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
        this.props.postSmurf(this.state)
    }
    
    render(){
        console.log(this.state)
        console.log('props', this.props)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <textarea name='name' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>Age:
                    <textarea name='age' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <label>Height:
                    <textarea name='height' value={this.state.value} onChange={this.handleChange}/>
                </label>
                <input type='submit' value='Submit' />
            </form>
        )
    }
}

const mapStateToProps = state =>{
    console.log('form state', state)
    return {
        smurf: state.smurf.smurf
    }
}

export default connect(
    mapStateToProps,
    { postSmurf }
)(Form);