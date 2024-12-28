let quoteEl = document.querySelector("#quote");
let authorEl = document.querySelector("#author");

let quoteButtonEl = document.querySelector("#quote-button");
let tweetButtonEl = document.querySelector("#tweet-button");

const url = "https://api.api-ninjas.com/v1/quotes?category=success";
const apiKey = "AqzcCY+JJLwLdBPzH6eeJw==RO9KJgrQdusLxNoa";

let fetchQuotes = async () => {
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  });
  let data = await response.json();

  return data;
};

async function renderQuotes() {
  quoteEl.innerHTML = `"Loading..."`;

  let data = await fetchQuotes();

  authorEl.style.display = "block";
  quoteEl.innerHTML = data[0].quote;
  authorEl.innerHTML = data[0].author;

  console.log(data[0].quote, data[0].author);
}

quoteButtonEl.addEventListener("click", () => {
  authorEl.style.display = "none";
  renderQuotes();
});
tweetButtonEl.addEventListener("click",()=>
{
  window.open("https://twitter.com/intent/tweet?text="+ quoteEl.innerHTML + "---by" +authorEl.innerHTML,"Tweet Window","width=600px,height=300px")
})

renderQuotes();
