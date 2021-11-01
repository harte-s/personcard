import React, { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }

    render() {
        
        let ageUp = ()=>{
            this.setState({age: this.state.age +1})
        }


        return (
        <div>
            <h1>{this.props.lastName},{this.props.firstName}</h1>
            <p>Age: {this.state.age}</p>
            <button onClick = {ageUp}>Happy birthday!</button>
            <p>Hair Color: {this.props.hairColor}</p>
            <hr />
        </div>
    )
    }

}

export default PersonCard;