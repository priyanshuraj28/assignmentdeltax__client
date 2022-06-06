import './App.css';
import Header from './components/Header';
import AddNewSong from './pages/AddNewSong'
import { Link } from "react-router-dom"
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Header />
        <div id="s">
          <div id="s1">Top 10 Songs</div>
          <Link id="s3" to="/AddNewSong">
            <div id="s2">+Add Song</div>
          </Link>
        </div>
      </Route>
      <Route exact path="/AddNewSong">
        <AddNewSong />
      </Route>
    </Switch>
  );
}
export default App;
