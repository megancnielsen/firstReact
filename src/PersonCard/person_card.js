import React, { Component } from 'react';

// const Button = (props) => {
//     return (
//         <button onClick={props.handleClick}>Click to increase age{props.count}</button>
//     );
// } this must be inside the class, cuz scope

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    }
    handleClick = () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render() {
        const Button = (props) => {
            return (
                <button onClick={this.handleClick}>Click to increase age</button>
            );
        }
        return (<div>
            <h1>{this.props.last_name}, {this.props.first_name}</h1>
            <h4>Age: {this.props.age + this.state.clickCount}</h4>
            <h4>Hair color: {this.props.hair_color}</h4>
            <Button handleClick={this.handleClick}/>
        </div>)
        // <Header first_name="Meg" last_name="Nielsen" age={1} hair_color="hairColor"/>); this line goes in App.js in the tag with the name of the class
    }
}

export default Person;