//function currying - using bind()
//                  - closure()

// let multiply = function(x,y){
// console.log(x*y);
// }

//closure
let multiply = function(x)
{
  return function(y)
  {
    console.log(x*y);
  }
}
//bind() creates a copy of the multipy method 
let multipyByTwo = multiply.bind(this,3,5); 
multipyByTwo(2);
let multipyByThree = multiply.bind(this, 3);
multipyByThree(2);
let multipyByFour = multiply.bind(this, 4,6);
multipyByFour();

let multiplybyFive = multiply(5);
multiplybyFive(10);