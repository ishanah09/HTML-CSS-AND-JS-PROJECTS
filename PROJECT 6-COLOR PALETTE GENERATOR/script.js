let buttonEl = document.querySelector("#button");
let colorsContainerEl = document.querySelector("#colors-container");

let hexColorGenerator = () => {
  let color = "#";

  const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hex.length);
    color += hex[random];
  }

  return color;
};

let colorPaletteGenerator = () => {
  colorsContainerEl.innerHTML = "";
  let colorArray = [];
  for (let i = 0; i < 12; i++) {
    colorArray.push(hexColorGenerator());
  }
  console.log(colorArray);

  colorArray.forEach((color, i) => {
    let colorDiv = document.createElement("div");
    colorDiv.id = `colorDiv${i + 1}`;
    colorDiv.className = "colorBox";
    colorDiv.style.backgroundColor = color;

    let colorPara = document.createElement("p");
    colorPara.className = "colorText";
    colorPara.id = `colorPara${i + 1}`;
    colorPara.textContent = color;

    colorsContainerEl.appendChild(colorDiv);
    colorDiv.appendChild(colorPara);

    colorPara.addEventListener("click", () => {
      copytoClipBoard(`colorPara${i + 1}`);
    });
  });
};

function copytoClipBoard(element) {
  navigator.clipboard
    .writeText(element.textContent)
    .then(() => {
      alert("copied to clipboard");
    })
    .catch((error) => {
      console.log(error);
    });
}

colorPaletteGenerator();

buttonEl.addEventListener("click", colorPaletteGenerator);
