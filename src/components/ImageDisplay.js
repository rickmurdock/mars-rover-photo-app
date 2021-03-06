import React, { Component } from "react";

export default class ImageDisplay extends Component {
  
  noPhotosHelper() {
    if (!this.props.images.length) {
      return (
        <div>
          <br/>
          <br />
          <img src={require('../images/marvinTheMartian.svg')} alt="" style={{width:"10%", float:"center"}}/>
          <br/>
          <br/>
          No Images Found
        </div>
      );
    }
  }

  render() {
    let photos = this.props.images.map((image, index) =>
      <img key={index} src={image.img_src} alt="" />
    );

    return (
      <div>
        {this.noPhotosHelper()}
        {photos}
      </div>
    );
  }
}
