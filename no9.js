//part 9 object destructuring
let ugandanFarmer = {
    name: "John",
    farmLocation: "Mbale",
    crop: "Coffee"
};
let {name, farmLocation, crop} = ugandanFarmer;
console.log(`${name} farms ${crop} in ${farmLocation}.`);
    
//task Using the school object, destructure the name, location, and studentsCount into variables and log them 
const school = {
    name: "Forest Hill College ",
    location: "Kampala, Uganda",
    studentsCount: 5000,
    schoolType: "Secondary"
};