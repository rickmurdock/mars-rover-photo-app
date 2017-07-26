import React, { Component } from 'react';

export default class GetImageButton extends Component {
  render() {
    let buttonStyle = {
      padding: 10,
      color: "white",
      backgroundColor: "blue",
      borderRadius: 10,
    };

    return (
      <div>
        <button onClick={this.props.action} style={buttonStyle}>Get Rover Image</button>
      </div>
    );
  }
}