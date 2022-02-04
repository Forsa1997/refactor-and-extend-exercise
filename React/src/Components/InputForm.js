import React, { Component } from "react"
import validateCar from "./CarValidator";
import YearSelect from "./YearSelect";
import MakeSelect from "./MakeSelect";


class InputForm extends Component {
    state = { make: 'Volkswagen', year: new Date().getFullYear(), isValid: true }

    render() {
        return (

            <div className="container col-lg-4 col-lg-offset-4" >
                <h1 className="vertical-center">Supercarstore</h1>
                <br />
                <label>Make:</label>
                <MakeSelect setMake={this.setMake} />
                <br />
                <label>Year:</label>
                <YearSelect start="1900" end={this.state.year} setYear={this.setYear} />
                <br />
                <div className="row align-items-start">
                    <div className="col">
                        <button className="btn btn-primary" onClick={() => { this.setState({ ...this.state, isValid: validateCar({ make: this.state.make, year: this.state.year }) }) }}>Validate</button>
                    </div>
                    <div className="col align-self-end">
                        {this.state.isValid ? <h5 className="text-success" >Valid Vehicle</h5> : <h5 className="text-danger">Invalid Vehicle</h5>}
                    </div>
                </div>
                <br />
                <label>Price:</label>
                <input className="form-control" type="number" name="price" onChange={(event) => this.setState({ ...this.state, price: event.target.value })} />
                <br />
                {/* TODO Button Funktion einfügen */}
                <button className="btn btn-primary btn-block" onClick={() => {
                    if (this.state.isValid) {
                        this.props.addToCurrentCarsList({
                            make: this.state.make,
                            year: this.state.year,
                            price: this.state.price,
                        })
                    }
                }}>Add</button>

            </div>
        )
    }
    setYear = (selectedYear) => {
        this.setState({ ...this.state, year: selectedYear })
    }

    setMake = (selectedMake) => {
        this.setState({ ...this.state, make: selectedMake })
    }

}



export default InputForm;

