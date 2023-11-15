import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ReactCardFlip from 'react-card-flip'
import React from 'react'
import './App.css'
// import gaza1 from "./gz1.png"
// import gaza2 from "./gz2.png"
// import ukraine1 from "./ukraine1.png"
// import ukraine2 from "./ukraine2.png"
import ukraine_s1 from "./ukraine_s1.png"
import ukraine_s2 from "./ukraine_s2.png"
import pr_before from "./pr_before.png"
import pr_after from "./pr_after.png"
import gaza_before from "./gaza_before.png"
import gaza_after from "./gaza_after.png"
import china_before from "./china_before.png"
import china_after from "./china_after.png"

const CustomHandle = () => {
  return <div style={{
    width: 10,
    height: 100,
    color:'white',
    backgroundcolor: 'white',
    // backgroundImage: `
    //       rgb(255, 255, 255) 100%,`,
    // boxShadow: `0 0 0 2px rgba(148,0,211,1),`,
    cursor: 'pointer'
  }} />;
};

class InfoCard extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div class = "flipcard-container">
          <h1>
            What is this conflict?
          </h1>
          <button className="btn" onClick={this.handleClick}>Click to flip</button>
        </div>

        <div class = "flipcard-container">
          <h1>
          {this.props.text}
          </h1>
          <button className="btn" onClick={this.handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
  }
}


function App() {
  return (
    <div>
      <div class ="main-container">
      <h1>Conflict Mapping With Night Time Light Data</h1>
      <p> Hover over each image to see the difference</p>

      <div class="sub-container">

        <div class = 'container' style={{marginRight: '200px', width: 550, height: 450 }}>
          <ReactCompareSlider
            handle = {<CustomHandle />}
            changePositionOnHover={true}
            itemOne={<ReactCompareSliderImage src={ukraine_s1} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={ukraine_s2} alt="Image two" />}
          />
          <div>
          <InfoCard text="Russian invasion of Ukraine, February 2022" />
          </div>
        </div>

        <div class = 'container' style={{marginLeft: '200px', width: 550, height: 450 }}>
          <ReactCompareSlider
            handle = {<CustomHandle />}
            changePositionOnHover={true}
            itemOne={<ReactCompareSliderImage src={pr_before} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={pr_after} alt="Image two" />}
          />
          <div>
          <InfoCard text="Hurricane Irma and Maria's devastation of Puerto Rico, August 2017" />
          </div>
        </div>

      </div>   

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


      <div class="sub-container">

        <div class = 'container' style={{marginRight: '200px', width: 550, height: 450 }}>
          <ReactCompareSlider
            handle = {<CustomHandle />}
            changePositionOnHover={true}
            itemOne={<ReactCompareSliderImage src={china_before} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={china_after}  alt="Image two" />}
          />
          <div>
          <InfoCard text="Growth of China, 2012-2023" />
          </div>
        </div>

        <div class = 'container' style={{marginLeft: '200px', width: 550, height: 450 }}>
          
          <ReactCompareSlider
            handle = {<CustomHandle />}
            changePositionOnHover={true}
            itemOne={<ReactCompareSliderImage src={gaza_before} alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src={gaza_after}  alt="Image two" />}
          />
          <div>
          <InfoCard text="Israel and Palestine, October 2023" />
          </div>
          
        </div>

      </div> 

      
      
    </div>


    </div>

  
  );
};

export default App
