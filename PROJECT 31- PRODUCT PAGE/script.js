let imageEl=document.querySelector("#image");
let buttonsEl=document.querySelectorAll(".button");

buttonsEl[0].addEventListener("click",()=>
{
  imageEl.src="./images/image1.png";
  buttonsEl[0].classList.add("selected")
  buttonsEl[1].classList.remove("selected")
  buttonsEl[2].classList.remove("selected")
})
buttonsEl[1].addEventListener("click",()=>
{
  imageEl.src="./images/image2.png"
  buttonsEl[0].classList.remove("selected")
  buttonsEl[1].classList.add("selected")
  buttonsEl[2].classList.remove("selected")
})
buttonsEl[2].addEventListener("click",()=>
{
  imageEl.src="./images/image3.png"
  buttonsEl[0].classList.remove("selected")
  buttonsEl[1].classList.remove("selected")
  buttonsEl[2].classList.add("selected")
})