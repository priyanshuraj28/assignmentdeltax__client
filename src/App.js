import './App.css';
import Header from './components/Header';
// import AddNewMusic from './pages/AddNewMusic'
import { Link } from "react-router-dom"
import { Route, Switch } from "react-router-dom";
import Music from './components/Music';
import aaoge from "./images/aaoge jab tum.jpg";
// import do from "./images/do pal.jpg";
import maa from "./images/maa.jpg";
import udaariyan from "./images/udaariyan.jpg";
import tum from "./images/tum hi ho.jpg";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        {/* <Header />
        <div id="s">
          <div id="s1">Top 10 Musics</div>
          <Link id="s3" to="/AddNewMusic">
            <div id="s2">+Add Music</div>
          </Link>
        </div> */}
         <Music
            Artwork={maa}
            song="Maa"
            dateOfRelease="May 12,2019"
            Artist="Shankar Mahadevan"
          />
          <Music
            Artwork={udaariyan}
            song="Udaariyan"
            dateOfRelease="July 16,2018"
            Artist="Satindar Sartaj"
          />
          <Music
            Artwork={tum}
            song="Tum hi ho"
            dateOfRelease="April 4,2013"
            Artist="Arijit Singh"
          />
          <Music
            Artwork={aaoge}
            song="Aaoge jab tum"
            dateOfRelease="May 30,2011"
            Artist="Rasid Khan"
          />
        {/* <Music/> */}
      </Route>
      <Route exact path="/AddNewMusic">
        {/* <AddNewMusic /> */}
      </Route>
    </Switch>
  );
}
export default App;
