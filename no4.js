//part 4 methods in objects(adding a method to calculate farm reven
let ugandanFarmer = {
    name: "John",
    farmLocation: "Mbale",
    crop: "Coffee",
    numberOfAcres: 5,
    cropPrice: 3000,
    calculateRevenue: function(harvestedBags) {
    return harvestedBags * this.cropPrice;
    }
    };
    let revenue = ugandanFarmer.calculateRevenue(200);
    
    console.log(`Total revenue for ${ugandanFarmer.crop} is UGX
    ${revenue}`);



//Task calculate school age
const school = {
    name: "Forest Hill College",
    location: "Kampala, Uganda",
    studentsCount: 8000,
    establishedYear: 2005,
    schoolType: "Secondary",
    calculateSchoolAge: function() {
      const currentYear = new Date().getFullYear()
      return currentYear - this.establishedYear;
    }
  };
  
  const schoolAge = school.calculateSchoolAge();
  console.log("School Age:", schoolAge, "years");