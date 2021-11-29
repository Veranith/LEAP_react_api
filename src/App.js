import "./App.css";
import UselessFacts from "./components/uselessFacts";

function App() {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <span className="card-title">Useless Fact:</span>
          <UselessFacts />
        </div>
      </div>
    </div>
  );
}

export default App;
