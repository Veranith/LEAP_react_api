import "./App.css";
import UselessFacts from "./components/uselessFacts";
import Chucknorris from "./components/chucknorris";
import DeckOfCards from "./components/deckofcards";
import Dictionary from "./components/dictionary";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Useless Fact:</span>
          <UselessFacts />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">Chuck Norris Jokes:</span>
          <Chucknorris />
        </div>
      </div>
      <div className="card">
        <div className="card-content">
          <span className="card-title">Your Random Card:</span>
          <DeckOfCards />
        </div>
      </div>
      {/* <div className="card">
        <div className="card-content">
          <span className="card-title">Dictionary:</span>
          <Dictionary />
        </div>
      </div> */}
    </div>
  );
}

export default App;
