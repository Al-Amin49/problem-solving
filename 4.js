/**
 
Task: Sorting Objects
Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
 */

const cars = [
    {
      make: "Honda",
      model: "Civic",
      year: 2023
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2022
    },
    {
      make: "Toyota",
      model: "Camry",
      year: 2024
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2021
    },
    {
      make: "BMW",
      model: "X3",
      year: 2020
    }
  ];


  function sortCar(cars){
    return cars.sort((a,b)=>a.year-b.year)
  }
const sortedCars=sortCar(cars);
console.log(sortedCars)