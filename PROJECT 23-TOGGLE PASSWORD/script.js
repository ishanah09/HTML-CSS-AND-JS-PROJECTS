let inputEl=document.querySelector("#input");

let eyeEl=document.querySelector("#image");


eyeEl.addEventListener("click",()=>
{
if(inputEl.type=="password")
{
  inputEl.type="text";
  eyeEl.src="eye-open.png";
}
else
{
  inputEl.type="password";
  eyeEl.src="eye-close.png";
}
})