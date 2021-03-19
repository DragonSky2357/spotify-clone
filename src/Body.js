import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img
          src="https://i.pinimg.com/474x/5a/9e/d1/5a9ed1b92fa80f68c072fd8751580dbe.jpg"
          alt=""
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discovery Weekly</h2>
          <p>descripton...</p>
        </div>

        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon />
            <FavoriteIcon />
            <MoreHorizIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
