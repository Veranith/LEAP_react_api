import "./App.css";
import UselessFacts from "./components/uselessFacts";
import Chucknorris from "./components/chucknorris";

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
    </div>
  );
}

export default App;
