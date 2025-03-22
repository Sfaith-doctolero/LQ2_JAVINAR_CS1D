//Name: Javinar, Stephanie Faith D.


//Instatntiate 5 Variables (name, adress, age Class Role, and Course)
let name = prompt("Enter your Name:");
let address = prompt("Enter your Address:");
let age = parseInt(prompt("Enter your Age:"));
let classRole = prompt("Enter your Class Role (Officer, Student, Teacher):");
let course = prompt("Enter your Course (BSCS, BSM, BAEL):");
//condition to check if any of the input is invalid 
if (!name || !address || isNaN(age) || !classRole || !course) {
  alert("Invalid input. Please provide all required information.");
} else {

//Determines the number of iterations
  let iterations = Math.floor(age / 4);
//check the class role
//fix for case sensitivity
  switch (course.toUpperCase()) {
    case "BSCS":
      switch (classRole.toUpperCase()) {
        case "OFFICER":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        case "STUDENT":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        case "TEACHER":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        default:
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          console.log("Default Class Role for BSCS");
          break;
      }
      break;

    case "BSM":
      switch (classRole.toUpperCase()) {
        case "OFFICER":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        case "STUDENT":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        case "TEACHER":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        default:
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          console.log("Default Class Role for BSM");
          break;
      }
      break;

    case "BAEL":
      switch (classRole.toUpperCase()) {
        case "OFFICER":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        case "STUDENT":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        case "TEACHER":
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          break;
        default:
          for (let i = 0; i < iterations; i++) {
            console.log(name);
          }
          console.log("Default Class Role for BAEL");
          break;
      }
      break;

    default:
      alert("Invalid Course. Please enter BSCS, BSM, or BAEL.");
      break;
  }
}