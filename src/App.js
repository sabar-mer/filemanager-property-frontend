import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//components
import Home from './views/Home';
import Table from './views/Table';

export default function App() {
  return (
    <Router>
      <div className="App flex flex-col place-content-between h-screen w-full pg-scroll" style={{backgroundImage: "url('https://img.freepik.com/photos-gratuite/texture-fond-degrade-gris-clair-aquarelle_145343-639.jpg?size=626&ext=jpg')",backgroundAttachment: "fixed",backgroundRepeat: "no-repeat",backgroundSize : "cover",height: "100vh",width : "100%"}}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/results">
            <Table />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}