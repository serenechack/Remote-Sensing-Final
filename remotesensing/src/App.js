import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import ReactCardFlip from 'react-card-flip'
import React from 'react'
import './App.css'

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
      <h1>Using NTL Data to Indentify Conflicts</h1>

      <div class="sub-container">

        <div class = 'container' style={{marginRight: '200px', width: 550, height: 450 }}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://images.pexels.com/photos/4474767/pexels-photo-4474767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  alt="Image two" />}
          />
          <div>
          <InfoCard text="Russian invasion of Ukraine, February 2022" />
          </div>
        </div>

        <div class = 'container' style={{marginLeft: '200px', width: 550, height: 450 }}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://images.pexels.com/photos/4474767/pexels-photo-4474767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  alt="Image two" />}
          />
          <div>
          <InfoCard text="Devestation of Hurricane Harvey and Maria in Puerto Rico, August 2017" />
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


      <div class="sub-container">

        <div class = 'container' style={{marginRight: '200px', width: 550, height: 450 }}>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://images.pexels.com/photos/4474767/pexels-photo-4474767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  alt="Image two" />}
          />
          <div>
          <InfoCard text="Growth of China, 2012-2023" />
          </div>
        </div>

        <div class = 'container' style={{marginLeft: '200px', width: 550, height: 450 }}>
          
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://images.pexels.com/photos/4474767/pexels-photo-4474767.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"  alt="Image two" />}
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