import React from "react";
import MatchListCard from "./MatchListCard";
import { connect } from "react-redux";
import { Grid } from "@mui/material";
import "bulma/css/bulma.min.css";

const MatchList = (props) => {
  const eachMatchInfo = props.matches.map((matchInfo) => {
    return (
      <React.Fragment key={matchInfo.data.info.gameId}>
        <MatchListCard
          gameType={matchInfo.data.info.gameMode}
          match={matchInfo.data}
        />
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <label
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontSize: "20px",
        }}
      >
        Past 10 Games Played
      </label>
      <div
        style={{
          paddingBottom: "20px",
          maxWidth: "900px",
          maxHeight: "700px",
          overflow: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container spacing={1}>
            {eachMatchInfo}
          </Grid>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return { matches: state.search.response_four };
};

export default connect(mapStateToProps)(MatchList);
