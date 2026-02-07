import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Elysa from the console!");

  //declaring a variable (Must use let), and initializing (assigning it to the value 24)
  let age = 24;
  console.log(age);

//reassigning age with a new value
  age = 37;

  // can only print value called (const means constantl or unchanging)
  const anotherAge = 88;
  console.log (anotherAge);

// not commomly used
  var evenAnotherAge =45
  console.log(evenAnotherAge);


// tells the type of data being called or declared
  console.log(typeof(age));

  //string
  let myName ='Elysa';
  console.log(myName);
  console.log(typeof(myName));

  //boolean
  let isHappy = true;
  console.log(isHappy);
  console.log(typeof(isHappy));

//no value
  let iDontHaveAValue;
  console.log(iDontHaveAValue);
  console.log(typeof(iDontHaveAValue));


  //null/object
  let iAmNull = null;
  console.log(iAmNull);
  console.log(typeof(iAmNull));

  //array
  let myArray = [1,2,3];
  console.log(myArray);
  console.log(typeof(myArray));


  //object

  let car = {
    make: "Ford",
    model: "Mustang",
    year: 1969,
  };

  console.log(car);
  console.log(typeof(car));
  


let sum = '12' - 9;
console.log(sum);
console.log(typeof(sum));


};
