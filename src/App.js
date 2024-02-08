import { useState } from 'react';
import './App.css';

const phrases = [
  "No 🙉",
  "Are you sure?",
  "Really Sure😢",
  "I'll be very sad😕",
  "Pookie Please🥺",
  "Don't do this to me🫤",
  "I'm gonna cry..😭",
  "You are breaking my heart😭💔",
];

function App() {
  const [count, setCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = count * 5 + 16;

  function handleYesBtnClick() {
    setYesPressed(true);
  }

  function handleNoBtnClick() {
    setCount(count + 1);
  }

  function getPhrase() {
    return phrases[Math.min(count, phrases.length-1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kisses" />
          <div className='win-text'>Yaaayyyy woohoo🙈🙈🙈 !!!!</div>
        </>
      ) : (
        <>
          <img className='kiss' src="https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif" alt="Jumping bear with heart"/>
          <div className='text'>Will you be my valentine🌹?</div>
          <div className='buttons'>
            <button className='yes-button'
                    style={{ fontSize: yesButtonSize, backgroundColor:'rgb(248, 229, 89)', color: 'black' }}
                    onClick={handleYesBtnClick}
            >
              Yes 🙈
            </button>
            <button className='no-button'
                    onClick={handleNoBtnClick}
            >
              {getPhrase()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
