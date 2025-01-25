let formEl = document.querySelector("#form");
let imageContainerEl = document.querySelector("#image-container");
let showButtonEl = document.querySelector("#show-button");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  imageContainerEl.innerHTML = "";

  let dataObj = {};

  let formData = new FormData(formEl);
  formData.forEach((value, key) => {
    dataObj[key] = value;
  });
  let keyword = dataObj.image;
  let page = 1;

  if(keyword=="")
  {
    imageContainerEl.innerHTML="SEARCH SOMETHING..."
  }
  else
  {
    fetchPhoto(keyword, page);

    showButtonEl.classList.remove("hide");
  }
  

  showButtonEl.addEventListener("click", () => {
    page++;
    fetchPhoto(keyword, page);
  });


  event.target.reset();
});



async function fetchPhoto(keyword, page) {
  let accessKey = "zGunEH5Oi__sz1q9myFo5r_vv5ZS0lvr_XZ2hp9nGWY";

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  let response = await fetch(url);
  let data = await response.json();
  console.log(data);



  
data.results.forEach((photo) => {
    let image = document.createElement("img");
    image.src = photo.urls.small;

    let anchorEl = document.createElement("a");
    anchorEl.href = photo.links.html;
    anchorEl.target = "_blank";

    imageContainerEl.appendChild(anchorEl);
    anchorEl.appendChild(image);
  });
  
 

}
