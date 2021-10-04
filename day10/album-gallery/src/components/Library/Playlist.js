import React from "react";
import { Link } from "react-router-dom";

const Playlist = (props) => {
  return (
    <>
      <div className="album">
        <div className="album_info">
          <Link to={`/library/${props.id}`}>
            <img
              src={props.pimage}
              alt="playlist-cover"
              className="album_img"
            />
            <p className="album-title">{props.pname}</p>
            <span className="album_artist">{props.createdBy}</span>
          </Link>
          <button
            className="btn mt"
            onClick={() => props.onRemovePlaylist(props.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Playlist;
