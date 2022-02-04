import React, { Component } from "react";
import InputForm from "./Components/InputForm";
import CarList from "./Components/CarList";
import {currentCars} from "./Data/CarData";

class App extends Component {
  state = { make: '', year: '', isValid: false, currentCarsList: currentCars }

  addToCurrentCarsList = (car) => {
    console.log(car)
    this.setState({...this.state,
      currentCarsList: [...this.state.currentCarsList,
         {...car, id: this.state.currentCarsList + 1}]
    })
  }



  render() {
    return (
      <div className="row">
        <div className="App">
          <InputForm isValid={this.state.isValid} addToCurrentCarsList={this.addToCurrentCarsList}/>
          <CarList carList={this.state.currentCarsList}/>
        </div>
      </div>
    );
  }
}

export default App;
