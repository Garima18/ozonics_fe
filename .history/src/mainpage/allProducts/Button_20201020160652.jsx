import React, { Component } from 'react'

 class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            clicked:false
        }
    }
    changeColor =()=>{
        this.setState({clicked: !this.state})
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
