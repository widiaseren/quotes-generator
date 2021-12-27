let dtQuotes = [];
const apiUrl = 'https://type.fit/api/quotes';

const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const twitterBtn = document.getElementById("twitter")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

// show random quote
function newQuote(){
  loading();
  const randomQuote = dtQuotes[Math.floor(Math.random() * dtQuotes.length)];
  // console.log(randomQuote)
  if(randomQuote.text.length >= 50)
    quoteText.classList.add('long-quote');
  else
    quoteText.classList.remove('long-quote');

  quoteText.textContent = randomQuote.text;
  authorText.textContent = randomQuote.author ? randomQuote.author : 'Unknown';
  complete();
}

async function getQuote(){
  loading();
  // method one
  try{
    const response = await fetch(apiUrl);
    dtQuotes = await response.json();
    // console.log(dtQuotes)
    newQuote();
  } catch(error){
    console.log("Woops, no quote", error);
  }

  // method two
  // const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  // const apiUrlx = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
  // try{
  //   const response = await fetch(proxyUrl + apiUrlx);
  //   const data = await response.json();
  //   console.log(data)
  // }catch(error){
  //   getQuote()
  //   console.log("Woops, no quote", error);
  // }
  complete();
}

function tweetQuote(){
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, '_blank');
}

function loading(){
  loader.hidden = false,
  quoteContainer.hidden = true
}

function complete(){
  loader.hidden = true,
  quoteContainer.hidden = false
}

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);

getQuote()
// loading()