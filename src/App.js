import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//Import Custom Components
import Login from "./components/Login";
import Robot from "./components/Robot";

function App() {
  return (
    <Router>
      <div className="App">
        <Robot />
      </div>
    </Router>
  );
}

export default App;
