/*type annotations
var number1:number|string
number1=10
console.log(number1)
object literals without prop types
var employee:object
employee={
    fname:"john",
    age:"23",
    email:"john@gmail.com"
}
console.log(employee)
//object literals with prop types
var employee:{
    fname:string,
    age:number|string,
    email:string
}
employee={
    fname:"john",
    age:"23",
    email:"john@gmail.com",
}
var empDetails:(number|string)[]
empDetails=[23,56,78,"hello","john"]

var empDetails:([number,string]|string)[]
empDetails=[[23,"john"],"hello","john"]

// 1. elements are fixed 2. order is retained
var empExperience:[number,string]
empExperience=[10,"Wipro"]
console.log(empExperience)
var rbg:[number,number,number,number?]
rbg=[255,255,255]
console.log(rbg)*/
function add(a, b) {
    return a + b;
}
add(10, 5);
