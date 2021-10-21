import "./App.css";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <div> "This is the Homepage page"</div>
        </Route>
        <Route path="/about">
          <div> "This is the Homepage page"</div>
        </Route>
        <Route path="/stocks/:symbol">
          <div> "This is the Homepage page"</div>
        </Route>
        <Route path="stocks">
          <div> "This is the Homepage page"</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
