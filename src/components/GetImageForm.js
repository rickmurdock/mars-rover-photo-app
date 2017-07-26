import React, { Component } from "react";
// import GetImageButton from "./GetImageButton";
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

    fetch(imageUrl)
      .then(response => response.json())
      .then(data => {
        this.setState({ images: data.photos });
      })
      .catch(error => {
        console.log("Error with Fetching : ", error);
      });
  };

  render() {

    let labelStyle = {
      color: "#0F68B1",
      fontSize: 18,
      textShadow: "1px 1px 1px white" 
    };
        
    let selectStyle = {
      color: "#0F68B1",
      fontSize: 18,
      borderRadius: 5,
      border: "1px solid blue"  
    };

    return (
      <div style={{textAlign:"center"}}>
        <div style={{textAlign:"center", top:0, position:"fixed", width:"100%"}}>
        <h1 style={{color:"orange", fontFamily:"Orbitron", textShadow:"2px 2px 5px red"}}>
          <img src={require('../images/nasaMarvin.png')} alt="Mars Exploration Rover logo" style={{width:"10%", float:"left", paddingLeft:30}}/>
            MARS ROVERS PHOTOS
          <img src={require('../images/nasaLogo.png')} alt="NASA logo" style={{width:"10%", float:"right", paddingRight:30}}/></h1>
        <form onSubmit={this.fetchMarsAPI}>
          <label htmlFor="rover" style={labelStyle}> Rover </label>
          <select onChange={this.handleRover} id="rover" style={selectStyle}>
            <option value="Curiosity">Curiosity</option>
            <option value="Opportunity">Opportunity</option>
            <option value="Spirit">Spirit</option>
          </select>
          <label htmlFor="camera" style={labelStyle}> &nbsp;Camera Type </label>
          <select onChange={this.handleCamera} id="rover" style={selectStyle}>
            <option value="fhaz">FHAZ (Front Hazard)</option>
            <option value="rhaz">RHAZ (Rear Hazard)</option>
            <option value="navcam">NAVCAM (Navigation Cam)</option>
          </select>
          <label htmlFor="sol" style={labelStyle}> &nbsp;Martian Sol: 1000-2000 </label>
          <input
            type="number"
            onChange={this.handleSol}
            value={this.state.sol}
            max="2000"
            min="1000"
            style={selectStyle}
          />
        </form>
        {/*<br />
        <GetImageButton action={this.fetchRoverImage} />*/}
        {/*<h3>
          {this.state.rover}
        </h3>*/}
        </div>
        <div style={{marginTop:140}}>
          <ImageDisplay images={this.state.images} />
        </div>
      </div>
    );
  }
}
