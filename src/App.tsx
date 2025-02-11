import { useState } from "react";
import "./App.css";

const phrases = [
  "No",
  "Are you sure",
  "Really sure?",
  "Please Please Please!",
  "Don't do this to me",
  "I'm gonna cry",
  "You're breaking my heart :(",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img
            alt="bears kissing"
            src="https://media.tenor.com/8trqa66_h6MAAAAi/dudu-bubu-bear-and-panda.gif"
          />
          <div className="text"> Yay!!!! </div>
        </>
      ) : (
        <>
          <img
            alt="bear with hearts"
            src="https://media.tenor.com/Je68nyCU_j8AAAAi/bubu-dudu-bubu-dudu-love.gif"
          />
          <div className="text"> Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
