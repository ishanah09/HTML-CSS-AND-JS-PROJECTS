let backButtonEl = document.querySelector(".back");
let nextButtonEl = document.querySelector(".next");
let galleryEl = document.querySelector("#gallery");

galleryEl.addEventListener("wheel", (event) => {
  event.preventDefault();
  galleryEl.scrollLeft += event.deltaY;
});


nextButtonEl.addEventListener("click",()=>
{
  galleryEl.scrollLeft += 300;

})
backButtonEl.addEventListener("click",()=>
{
  galleryEl.scrollLeft -= 300;
})