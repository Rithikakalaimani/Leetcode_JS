document.querySelector("#grandparent").addEventListener('click',(e)=>{
  console.log("grandParent clicked")
  e.stopPropagation(); // stop event from bubbling up to the event
},true);//event capturing

document.querySelector("#parent").addEventListener('click',()=>{
  console.log("parent clicked");
},false);//event bubbling 

document.querySelector("#child").addEventListener('click',()=>{
  console.log("child clicked");
},true);//event capturing

// grandparent clicked -> child clicked -> parent clicked 
// so when grandparent is clicked this first calls grandparent 
// .. since the parent is set to false  is is skipped and the event capturing continues 
// therefore child is printed and then once th