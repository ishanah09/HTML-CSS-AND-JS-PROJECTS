let number=document.querySelector("#number");
let count=0;
setInterval(() => {
  if(count==65)
  {
    clearInterval();
  }
  else
  {
    count++;
    number.innerHTML=count+"%";
  }
}, 30);