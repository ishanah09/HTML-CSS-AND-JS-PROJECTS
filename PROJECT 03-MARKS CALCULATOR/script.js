let resultEl = document.querySelector("#result");
let formEl = document.querySelector("#calculateForm");

function calculate(event) {
  event.preventDefault();

  const formData = new FormData(formEl);
  let data = {};

  formData.forEach((value, key) => {
    data[key] = +value;
  });

  const totalMarks =
    data.math + data.science + data.hindi + data.english + data.computer;
  let percentage = Math.round((totalMarks / 500) * 100);

  resultEl.innerHTML = `You have got ${totalMarks} marks out of ${marks} and your percentage is ${percentage}%`;
  event.target.reset();
}
