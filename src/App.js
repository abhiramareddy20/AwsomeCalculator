import React, { Component } from 'react'
import Keypad from './components/Keypad'
import Output from './components/Output'

export default class App extends Component {

  state = {
     result : ''
  }

  buttonPressed = (buttonName) =>{
    if(buttonName === "=")
    {
      this.calculate();
    }else if(buttonName === "CE"){
      this.backSpace();
    }else if(buttonName === "C"){
      this.reset();
    }else
    this.setState({
      result : this.state.result + buttonName 
    });
  };

  
  calculate = () => {
  try{
    this.setState({
      result : eval(this.state.result)
    });
  }catch(e){
    this.setState({
      result : "error"
    })  
  };
  }

  reset = () => {
    this.setState({
      result: ""
    });
  };

  backSpace = () => {
    try{
      this.setState({
      result : this.state.result.slice(0,-1)
    });
  }
  catch(e){
    this.setState({

      result : "Error"
    });
  };
  };

  render() {
    return (
      <div className = "App">
        <Output result = {this.state.result}/>
        <Keypad buttonPressed = {this.buttonPressed}/>
      </div>
    )
  }
}
