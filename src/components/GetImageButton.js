import React, { Component } from 'react';

export default class GetImageButton extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.action}>Get Rover Image</button>
      </div>
    );
  }
}