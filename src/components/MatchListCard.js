import React from "react";
import "bulma/css/bulma.min.css";
import { connect } from "react-redux";
import { history } from "./App";
import { selectMatch } from "../actions";

const MatchListCard = (props) => {
  const goToDetailedMatch = () => {
    props.selectMatch(props.match);

    history.push("/match/" + props.match.info.gameId);
  };

  const winLoss = props.match.info.participants
    .filter((player) => player.puuid === props.playerInfo.data.puuid)
    .map((filteredPlayer) => {
      return (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className={filteredPlayer.win ? "tag is-success" : "tag is-danger"}
          id={filteredPlayer.win ? "green" : "red"}
        >
          {filteredPlayer.win ? "W" : "L"}
        </div>
      );
    });

  const playerPic = props.match.info.participants
    .filter((player) => player.puuid === props.playerInfo.data.puuid)
    .map((filteredPlayer) => {
      return (
        <div className="image is-64x64" id="playerpic">
          <img
            src={
              "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/" +
              filteredPlayer.championId +
              ".png"
            }
            alt={filteredPlayer.championName}
          />
        </div>
      );
    });

  const playerKDA = props.match.info.participants
    .filter((player) => player.puuid === props.playerInfo.data.puuid)
    .map((filteredPlayer) => {
      return (
        <div key={filteredPlayer.puuid}>
          <div
            style={{ display: "flex", justifyContent: "center" }}
            class="kda"
          >
            {filteredPlayer.kills +
              "/" +
              filteredPlayer.deaths +
              "/" +
              filteredPlayer.assists}
          </div>
        </div>
      );
    });

  var d = new Date(0);
  d.setUTCSeconds(props.match.info.gameStartTimestamp / 1000);

  return (
    <div
      style={{ width: "40vw", maxHeight: "60px" }}
      id="playercard"
      onClick={goToDetailedMatch}
    >
      <div
        style={{ display: "flex", justifyContent: "center" }}
        id="winlossbox"
      >
        {winLoss}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center" }}
        id="playerpicbox"
      >
        {playerPic}
      </div>
      <div id="gametype">{props.gameType}</div>
      <div id="kda">{playerKDA}</div>
      <div id="date" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
        {d.toLocaleDateString()}
      </div>
      <div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { playerInfo: state.search.response };
};

export default connect(mapStateToProps, { selectMatch })(MatchListCard);
