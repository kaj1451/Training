//1. Variables & Data Types

let age = 23;
let name = "Kajendran";
let isStudent = true;
console.log(age);
console.log(name);
console.log(isStudent);

//2. Arrays & Accessing Elements
let fruits = ["Mango","Banana","Apple","Watermelon","Strawberry"];

console.log(fruits);
console.log("first and last fruit from the array:", fruits[0],fruits[4]);
fruits[1] = "Grape";
console.log("Change the second element to a new fruit:", fruits);

// 3. Array Manipulation (Push, Pop, Shift, Unshift)

let numbers = ["20","15","10","25","05"]
console.log(numbers);
numbers.push("30");
console.log(numbers);
numbers.pop();
console.log(numbers);
numbers.shift();
numbers.unshift("40");
console.log(numbers);

// 4. Filter and Map on Arrays

let number = [5, 12, 8, 130, 44];

let filteredNumbers = number.filter(num => num > 10);

console.log("Greater than 10:", filteredNumbers);

/*
number.filter(greater)

function greater(number) {
  return number < 10;
}

console.log(greater); */

let multipliedNumbers = number.map(num => num * 2);

console.log("multiplied by 2:", multipliedNumbers);

// 5. Objects - Basic Structure and Access

let person = {
  name: "Kajendran",
  age: 23,
  city: "Chennai"
};

console.log("Name:", person.name, "city:", person.city);

person.age = "25";

console.log("Change the age property to a new value:", person)

// 6. Object Manipulation (Add, Update, Delete)

let car = {
    brand: "Tata",
    model: "Nexon",
    year: "2019"
};

console.log(car);

car.color ="blue";
car.model = "punch";

delete car.year;

console.log("final object:", car);

// 7. Arrays of Objects

let books = [
  {
    title: "Rich Dad Poor Dad",
    author: "Sharon Lechter",
    yearPublished: 1997
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    yearPublished: 2020
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    yearPublished: 2018
  }
];

console.log("Titles:");
for (let i = 0; i < books.length; i++) {
  console.log(books[i].title);
}

let book = books.filter(book => book.yearPublished > 2000);

console.log(book);

// 8. Advanced Object Filtering (Using Array Methods)

let employees = [
{ name: "Alice", department: "IT", salary: 50000 },
{ name: "Bob", department: "HR", salary: 70000 },
{ name: "Charlie", department: "Finance", salary: 60000 }
];

let highSalary = employees.filter(employee => employee.salary > 55000);

console.log("employees with a salary greater than 55000:", highSalary);

let employeeNames = employees.map(employee => employee.name);
console.log("employee Names:", employeeNames);

let totalSalary = employees.reduce((accumulator, employee) => accumulator + employee.salary, 0);
console.log("total salary of all employee:", totalSalary);
