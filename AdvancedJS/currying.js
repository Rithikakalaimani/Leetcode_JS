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

function sum(a) {
  // Return a function that takes the next argument
  return function (b) {
    if (b !== undefined) {
      // Continue currying
      return sum(a + b); // Accumulate the sum
    } else {
      // Final value when no argument is provided
      return a;
    }
  };
}
console.log(sum(1)(2)(3)(4)()); // Output: 10