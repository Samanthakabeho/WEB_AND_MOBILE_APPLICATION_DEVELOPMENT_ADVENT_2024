 //part 5 nested objects for a Ugandan city
 let kampalaCity = {
    name: "Kampala",
    population: 1500000,
    districts: {
    central: "Kampala Central",
    east: "Jinja",
    north: "Kawempe",
    south: "Makindye",
    west: "Rukugiri"
    }
    };
    console.log(`District in the north of Kampala:
    ${kampalaCity.districts.north}`);



//task a university object that contains nested objects for departments
const university = {
    name: "Kampala International University",
    location: "Kampala, Uganda",
    departments: {
      computerScience: {
        name: "Department of Computer Science",
        headOfDepartment: "Prof Male Mark"
      },
      engineering: {
        name: "Department of Engineering",
        headOfDepartment: "Prof. Dr. Ivan Samuel"
      }
    }
  };
    
  console.log("Head of the Department of Computer Science:", university.departments.computerScience.headOfDepartment);