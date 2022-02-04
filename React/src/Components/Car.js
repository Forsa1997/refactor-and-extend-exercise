import React, {Component} from "react";

class Car extends Component {


    render(){
        return(
        <div className="list-group-item">
         <div className="row">
                <div className="col-md-4">{this.props.car.make}</div>
                <div className="col-md-4">{this.props.car.year}</div>
                <div className="col-md-4">${this.props.car.price}</div>
        </div>
  </div>
        )
    }
}

export default Car;