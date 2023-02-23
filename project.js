document.addEventListener("DOMContentLoaded",()=>{
  function counter(id, start, end,duration){
      let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1: -1,
      step = Math.abs(Math.floor(duration/ range)),
      timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if(current ==end){
              clearInterval(timer);
          }
      },step);
  }
  counter("count1",0,1287,3000);
  counter("count2",100,400,200);
  counter("count3",1000,2010,1500);
  counter("count4",0,300,100);
  
});