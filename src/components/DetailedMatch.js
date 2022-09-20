import React from "react";
import "bulma/css/bulma.min.css";
import { connect } from "react-redux";
import DetailedMatchPlayerCard from "./DetailedMatchPlayerCard";
import { Grid } from "@mui/material";

const DetailedMatch = (props) => {
  const players = props.selectedMatch.info.participants.map((player) => {
    return (
      <React.Fragment key={player.puuid}>
        <DetailedMatchPlayerCard player={player} />
      </React.Fragment>
    );
  });

  var team1 = [];
  for(let i = 0; i < 5; i++) {
    team1[i] = players[i];
  }

  var team2 = [];
  for(let i = 0; i < 5; i++) {
    team2[i] = players[i+5];
  }

  return (
    <React.Fragment>
      <div style={{ display: "flex", padding: "10px" }} className="matchgrid">
          {team1}
      </div>
      <div style={{ display: "flex", padding: "10px" }} className="matchgrid">
          {team2}
      </div>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return { selectedMatch: state.selected };
};

export default connect(mapStateToProps)(DetailedMatch);
