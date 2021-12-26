let dtQuotes = []
const apiUrl = 'https://type.fit/api/quotes'

// show random quote
function newQuote(){
  const randomQuote = dtQuotes[Math.floor(Math.random() * dtQuotes.length)];
  console.log(randomQuote)
}

async function getQuote(){
  try{
    const response = await fetch(apiUrl)
    dtQuotes = await response.json()
    // console.log(dtQuotes)
    newQuote()
  } catch{
    console.log("Error getQuote")
  }
}

getQuote()