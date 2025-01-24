let textareaEl = document.querySelector("textarea");
let buttonEl = document.querySelector("#button");
let selectEl = document.querySelector("select");

let voices = [];

let speech = new SpeechSynthesisUtterance();

buttonEl.addEventListener("click", () => {
  speech.text = textareaEl.value;
  window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {
   voices = window.speechSynthesis.getVoices();
  console.log(voices);

  speech.voice=voices[0];


  voices.forEach((voice,i)=>
  {
    selectEl.options[i]=new Option(voice.name,i)
  })
};


selectEl.addEventListener("change",()=>
{
  speech.voice=voices[selectEl.value]
})