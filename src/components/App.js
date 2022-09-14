import React from "react";
import { Route } from "react-router-dom";
import { Router } from "react-router-dom";
import SearchBar from "./SearchBar";
import PlayerInfo from "./PlayerInfo";
import "bulma/css/bulma.min.css";
import { connect } from "react-redux";
import { createBrowserHistory } from "history";
import { getPlayerByName } from "../actions";
import DetailedMatch from "./DetailedMatch";

//css
//

export const history = createBrowserHistory();

const App = (props) => {
  return (
    <div
      style={{ backgroundColor: "blue", minWidth: "600px", minHeight: "100vh" }}
    >
      <Router history={history}>
        <Route path="/" component={SearchBar} />
        <Route path={"/player_info/player_name/"} component={PlayerInfo} />
        <Route path={"/match/"} component={DetailedMatch} />
      </Router>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { searchName: state.form };
};

export default connect(mapStateToProps, { getPlayerByName })(App);
