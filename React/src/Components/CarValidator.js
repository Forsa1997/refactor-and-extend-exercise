import { validCarList } from "../Data/SeedData";

const validateCar = (car) => {

    console.log(typeof car.year);
    if (!(car.year>=1900 && car.year<=2100)){
        console.log("Year: " + car.year)
        console.log("CarValidator.notValid")
        return false;
    }
    var result = false
    validCarList.forEach((validCar) => {
        console.log(validCar)
        if (car.make.toLowerCase() === validCar.make.toLowerCase() &&
            car.year >= validCar.yearBegin &&
            car.year <= validCar.yearEnd) {
            console.log("CarValidator.valid")
            result = true;
            return;
        }
    })
    console.log("CarValidator: " + result)
    return result;
}

export default validateCar;