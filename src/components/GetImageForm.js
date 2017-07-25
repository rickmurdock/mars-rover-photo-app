import React, { Component } from "react";
import GetImageButton from "./GetImageButton";
import ImageDisplay from "./ImageDisplay";

export default class GetImageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rover: "Curiosity",
      camera: "FHAZ",
      images: [],
      sol: "1500"
    };
  }

  componentDidMount() {
    this.fetchRoverImage();
  }

  handleRover = e => {
    this.setState({ rover: e.target.value }, this.fetchRoverImage);
  };

  handleCamera = e => {
    this.setState({ camera: e.target.value }, this.fetchRoverImage);
  };

  handleSol = e => {
    this.setState({ sol: e.target.value }, this.fetchRoverImage);
  };

  fetchRoverImage = e => {
    let cam = this.state.camera;
    let rover = this.state.rover;
    let num = this.state.sol;
    const API_KEY = "gyvjdGMVNgpfpEXDMDO9MSdv0E56vETb8TvoQP8X";

    let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

    console.log("imageUrl: ", imageUrl);
    fetch(imageUrl)
      .then(response => response.json())
      .then(data => {
        console.log("response data", data);
        this.setState({ images: data.photos });
      })
      .catch(error => {
        console.log("Error with Fetching : ", error);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.fetchMarsAPI}>
          <label htmlFor="rover">Rover</label>
          <select onChange={this.handleRover} id="rover">
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera">Camera Type</label>
          <select onChange={this.handleCamera} id="rover">
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol">Martian Sol: 1000-2000</label>
          <input
            type="number"
            onChange={this.handleSol}
            value={this.state.sol}
            max="2000"
            min="1000"
          />
        </form>
        <br />
        <GetImageButton action={this.fetchRoverImage} />
        <h3>
          {this.state.rover}
        </h3>

        <ImageDisplay images={this.state.images} />
      </div>
    );
  }
}
