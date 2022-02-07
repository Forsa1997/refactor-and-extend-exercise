import React, { Component } from "react";
import { carBrands } from "../Data/CarBrands";

class MakeSelect extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logo: "https://www.car-logos.org/wp-content/uploads/2011/09/abarth1.png"
        }
    }

    handleSelection = (e) => {
        const brand = JSON.parse(e.target.value);
        this.props.setMake(brand.name);
        this.setState({logo: brand.logo})
        // carBrands.forEach(element => {
        //     if(element.name === e.target.value)
        //     this.setState({logo: element.logo})
        // })
    }

render() {
    return (
    <div className="row align-items-start">
    <div className="col">
    <select className="form-control" id="make" name="make"
                onChange={e => this.handleSelection(e)}>
                {
                    carBrands.map((brand, index) =>
                        <option key={index}  value={JSON.stringify(brand)}>{brand.name}</option>)
                }
            </select>
    </div>
    <div className="col align-self-end">
    <img src={this.state.logo} width="40px" height="40px" />
    </div>
</div>  
    )
}
}
export default MakeSelect