let submitButton=document.querySelector("#submit");
let popUpContainer=document.querySelector("#pop-container");
let okButton=document.querySelector("#ok");

submitButton.addEventListener("click",()=>
{
  popUpContainer.classList.add("pop-up");
})
okButton.addEventListener("click",()=>
{
  popUpContainer.classList.remove("pop-up");
})