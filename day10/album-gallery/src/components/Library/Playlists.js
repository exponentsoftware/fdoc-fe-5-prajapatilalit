import React from "react";
import Playlist from "./Playlist";

const Playlists = ({ playlistItems, onDeletePlaylist }) => {
  return playlistItems.map((playlist) => (
    <Playlist
      key={playlist.id}
      id={playlist.id}
      pname={playlist.pname}
      createdBy={playlist.createdBy}
      playlistImage={playlist.pimage}
      playlistData={playlist}
      onRemovePlaylist={onDeletePlaylist}
    />
  ));
};

export default Playlists;
