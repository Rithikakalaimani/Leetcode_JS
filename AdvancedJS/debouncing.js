//debouncing  
 let counter=0;
let getData =  ()=>{
  //calls an API and gets the data each and every key enter which is a cost expensive thing to do 
  //so we use debouncing to limit the number of times we call the API i.e. wait for the pause 
  console.log("Fetching Data..."+" "+counter++); 
}

const debounceMethod = function(func,delay)
{
  let timer;
  let obj = this
  clearTimeout(timer);
  return function(...args)
  {
    timer = setTimeout(()=>{
      func.apply(obj,args);
    },delay);
  }
}

const betterFunction = debounceMethod(getData,1000);