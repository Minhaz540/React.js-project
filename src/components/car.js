import React from "react";

const day = new Date().getDay();
const date = new Date().getDate();
const year = new Date().getFullYear();

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {color : "Red"};
    }
    render() {
        return (
            <div>
                <h1 style={{color : "red"}}>This is a {this.state.color} Car {this.props.model.top} {this.props.totalCount*4}</h1>
                <p>{`Day index: ${day} Date: ${date} Year: ${year}`}</p>
            </div>
        );
    }
}