let inputEl = document.querySelector("#input");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let nameEl = document.querySelector("#name");
let userNameEl = document.querySelector("#username");
let bioEl = document.querySelector("#bio");
let followersEl = document.querySelector("#followers");
let followingsEl = document.querySelector("#followings");
let reposEl = document.querySelector("#repos");
let loadingEl = document.querySelector("#loading");
let imageEl = document.querySelector("#image");
let profileEl = document.querySelector("#profile-container");

const url = "https://api.github.com/users";



async function renderdata() {
  let inputValue = inputEl.value;
  profileEl.classList.add("hide");
  loadingEl.innerHTML = "LOADING...";

  let response = await fetch(`${url}/${inputValue}`);
  let data = await response.json();
  console.log(data);

  try {
    if (inputValue == "") {
      loadingEl.innerHTML = "PLEASE ENTER USERNAME";
    } else if ((data.message == "Not Found")) {
      loadingEl.innerHTML = "PROFILE NOT FOUND";
    } else {
      loadingEl.innerHTML = "";
      button2.href = data.html_url;
      nameEl.innerHTML = data.name;
      userNameEl.innerHTML = `@${data.login}`;
      imageEl.src = data.avatar_url;
      bioEl.innerHTML = data.bio;
      followersEl.innerHTML = data.followers;
      followingsEl.innerHTML = data.following;
      reposEl.innerHTML = data.public_repos;

      profileEl.classList.toggle("hide");
    }
  } catch (error) {
    console.log(error);
    loadingEl.innerHTML = "loading...";
  }
}


button1.addEventListener("click", renderdata);