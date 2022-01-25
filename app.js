
let quotesDB = ['“Be yourself; everyone else is already taken.” ― Oscar Wilde', '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.” ― Albert Einstein', '“You only live once, but if you do it right, once is enough.” ― Mae West', '“Good friends, good books, and a sleepy conscience: this is the ideal life.” ― Mark Twain']

function splitQuoteAndAuthorThenShow() {
    let max = quotesDB.length;
    let randomQuoteNum = Math.floor(Math.random() * max);
    let splitQuote = quotesDB[randomQuoteNum].split(' ― ')
    let quoteText =  splitQuote[0];
    let quoteAuthor = splitQuote[1];
    let webPositionOfQuote = document.getElementById('q-text');
    let webPositionOfAuthor = document.getElementById('q-author');
    webPositionOfQuote.innerHTML = quoteText;
    webPositionOfAuthor.innerHTML = quoteAuthor;
  }


function copyQuote() {
  let quoteText = document.getElementById('q-text').textContent;
  let authorText = document.getElementById('q-author').textContent;
  let copyWhole =  quoteText + ' – ' + authorText;
  console.log("copyWhole");
  copyText(copyWhole);
  alert('Copied!' + '\n' + '\n' + copyWhole);
}
function copyText(text) {
  navigator.clipboard.writeText(text);
}
