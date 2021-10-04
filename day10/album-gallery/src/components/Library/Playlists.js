import React from "react";
import { Link } from "react-router-dom";

const Playlists = (props) => {
  return (
    <>
      <div className="album">
        <div className="album_info">
          <Link to={`/albums/${props.id}`}>
            <img
              src={props.albumCover}
              alt="Album-cover"
              className="album_img"
            />
            <p className="album-title">{props.album}</p>
            <span className="album_artist">{props.artist}</span>
            <button className="btn mt" onClick={() => props.onRemove(props.id)}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Playlists;
