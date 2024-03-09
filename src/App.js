import './App.css';
import { quotes } from './data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTumblr } from '@fortawesome/free-brands-svg-icons'; // Import the specific icon
import { useState } from 'react';

const getRandomQuote = () => quotes[Math.floor(Math.random()*quotes.length)]

const getRandomColor = () => {
  const re = Math.floor(Math.random()*255)
  const gr = Math.floor(Math.random()*255)
  const bl = Math.floor(Math.random()*255)
  return `rgb(${re},${gr},${bl})`
}



function App() {
  const [quote, setQuote] = useState(getRandomQuote())
  const [color, setColor] = useState(getRandomColor())
  const changeQuote = () => {
  setQuote(getRandomQuote())
  setColor(getRandomColor())
}
const transition = 'all 1s'
  return (
    <div className="App" style={{backgroundColor:color, transition}} >
      <header className="App-header">
        <div
          id='quote-box'
        >
        <p id='text' style={{color:color, transition}}><i className="bi bi-quote">{quote.quote}</i></p>
        <br />
        
        <p id='author' style={{color:color, transition}}>
        - {quote.author}
        </p>
        <button id='new-quote' style={{backgroundColor:color, transition}} onClick={changeQuote}>New quote</button>
        <a id='tweet-quote' style={{backgroundColor:color, transition}} href="twitter.com/intent/tweet"><i className="bi bi-twitter-x"></i></a>
        <a id='tumblr-quote' style={{backgroundColor:color, transition}}  href="https://www.tumblr.com/share">
        <FontAwesomeIcon icon={faTumblr} />
          </a>
          
        </div>
      </header>
    </div>
  );
}

export default App;
