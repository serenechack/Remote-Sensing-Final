import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ReactCardFlip from 'react-card-flip'
import React from 'react'
import './App.css'
import ukraine1 from "./ukraine1.png"
import ukraine2 from "./ukraine2.png"
import pr1 from "./PR1.png"
import pr2 from "./PR2.png"
import gaza1 from "./gaza1.png"
import gaza2 from "./gaza2.png"
import china1 from "./China1.png"
import china2 from "./China2.png"
import dummy from "./dummy588x450.png"
import dummy2 from './dummy2.png'

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
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
        <div class = 'image' onClick={this.handleClick}>
          <ReactCompareSlider
            handle = {<CustomHandle />}
            changePositionOnHover={true}
            itemOne={this.props.itemOne}
            itemTwo={this.props.itemTwo}
          />
        </div>
 
        <div class = "image" onClick={this.handleClick}>
          <div>
          {this.props.text}
          </div>
          <div>
          {this.props.text2}
          </div>
       
        </div>
      </ReactCardFlip>
    )
  }
}


function App() {
  return (
<div class="container">
  <div class="headercontainer">
    <div class ="header">Tracking Change with Night Time Lights </div>
    <div class = "subheading">Hover over each image for night time light changes</div>
    <div class = "subheading">Click for context</div>
  </div>
  <div class="Row">
    <div class="green">
      <div class = "image">
        <InfoCard
        text="Russian Invasion of Ukraine"
        text2 = "February 2022"
        itemOne={<ReactCompareSliderImage src={ukraine1} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={ukraine2} alt="Image two" />}
        />
      </div>
    </div>

    <div class="green">
      <div class = "image">
      <InfoCard
        text="Hurricane Irma and Maria on Puerto Rico"
        text2="August 2017"
        itemOne={<ReactCompareSliderImage src={pr1} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={pr2} alt="Image two" />}
        />
      </div>
    </div>
  </div>

  <div class="Row">
    <div class="green">
      <div class = "image">
      <InfoCard
        text="Israel Palestine Conflict"
        text2="October 2023"
        itemOne={<ReactCompareSliderImage src={gaza1} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={gaza2} alt="Image two" />}
        />
      </div>
    </div>

    <div class="green">
      <div class = "image">
      <InfoCard
        text="Growth of China"
        text2="2012 - 2022"
        itemOne={<ReactCompareSliderImage src={china1} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={china2} alt="Image two" />}
        />
      </div>
    </div>
  </div>
</div>
    // <div class = 'main-container'>
    //   <div class ="Header">
    //     <div class = "header">Conflict Mapping With Night Time Light Data</div>
    //     <div class = 'subheading'>Hover over each image to see the difference</div>

    //   <div class="Row">
    //       <div class = "image">
    //         <ReactCompareSlider
    //           handle = {<CustomHandle />}
    //           changePositionOnHover={true}
    //           itemOne={<ReactCompareSliderImage src={dummy2} alt="Image one" />}
    //           itemTwo={<ReactCompareSliderImage src={dummy2} alt="Image two" />}
    //         />
    //         <div class = 'infocard'>
    //           <InfoCard text="Russian invasion of Ukraine, February 2022" />
    //         </div>
    //       </div>
            

    //       <div class = "image">
    //       <ReactCompareSlider
    //         handle = {<CustomHandle />}
    //         changePositionOnHover={true}
    //         itemOne={<ReactCompareSliderImage src={dummy} alt="Image one" />}
    //         itemTwo={<ReactCompareSliderImage src={dummy} alt="Image two" />}
    //       />
    //       <div class = 'infocard'>
    //         <InfoCard text="Hurricane Irma and Maria's devastation of Puerto Rico, August 2017" />
    //         </div>
    //         </div>
    //         </div>
           
    


    //   <div class="Row">

    //     <div class = 'container'>
    //       <ReactCompareSlider
    //         handle = {<CustomHandle />}
    //         changePositionOnHover={true}
    //         itemOne={<ReactCompareSliderImage src={dummy} alt="Image one" />}
    //         itemTwo={<ReactCompareSliderImage src={dummy}  alt="Image two" />}
    //       />
    //       <div>
    //       <InfoCard text="Growth of China, 2012-2023" />
    //       </div>
    //     </div>

    //     <div class = 'container'>
          
    //       <ReactCompareSlider
    //         handle = {<CustomHandle />}
    //         changePositionOnHover={true}
    //         itemOne={<ReactCompareSliderImage src={dummy} alt="Image one" />}
    //         itemTwo={<ReactCompareSliderImage src={dummy}  alt="Image two" />}
    //       />
    //       <div>
    //       <InfoCard text="Israel and Palestine, October 2023" />
    //       </div>
          
    //     </div>

    //   </div> 

      
      
    // </div>


    // </div>

  
  );
};

export default App
