import React from "react";
import Playlists from "./Playlists";

const Library = ({ playlists, onRemovePlaylist }) => {
  return (
    <div>
      <Playlists
        playlistItems={playlists}
        onDeletePlaylist={onRemovePlaylist}
      />
    </div>
  );
};

export default Library;
