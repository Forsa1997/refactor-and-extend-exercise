import React, {Component} from "react";
import Car from "./Car";


class CarList extends Component {
    
    render(){
        return(
        <div className="container col-lg-4 col-lg-offset-4">
        <h2>Supercar Inventory</h2>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-4">Make</div>
              <div className="col-md-4">Year</div>
              <div className="col-md-4">Price</div>
            </div>
          </div>
          {
            this.props.carList.map((car) => <Car key={car.id} car={car} />)
          }
        </div>
      </div>
        )
    }

}


export default CarList;