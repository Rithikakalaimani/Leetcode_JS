//polyfill , function borrowing , call() apply() bind()

let name = {
  first: "Rithika",
  last : "Kalaimani"
}
let name1 = {
  first:"Mani",
  last:"Kandan"
}
//function borrowing 
let printName = function(location,country,...args){
  console.log(this.first+" "+this.last+" "+location+" "+country+" "+args);
}
// this refers to the obj it is pointing to and therefore can access the first and last name
//first args points tho the obj 
printName.call(name,"chennai","TamilNadu"); 
printName.apply(name1,["pune","Maharashtra"]);

Function.prototype.myBind =function(...args){
  let obj = this;
  let params = args.slice(1);
  return function(...args2)
  {
    obj.apply(args[0],[...params,...args2]);
  }
}

let printName1 = printName.myBind(name,"cochin","Kerala");
printName1("India");