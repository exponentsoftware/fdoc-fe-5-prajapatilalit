import React from "react";

import songs from "../Songs/index";

const PlaylistOne = () => {
  return (
    <div>
      {/* {
        <div className="album">
          <img
            src={albumItem.albumCover}
            alt="Album-cover"
            className="album_img"
          />
          <p className="album-title">{albumItem.album}</p>
          <span className="album_artist">{albumItem.artist}</span>
        </div>
      } */}

      <div>
        <table>
          <thead>
            <tr className="table-hading">
              <th>#</th>
              <th>TITLE</th>
              <th>ALBUM</th>
              <th>DateAdded</th>
              <th>
                <i class="far fa-clock"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((pSong, index) => (
              <tr className="table-body" key={pSong.id}>
                <td>{index}</td>
                <td>
                  <div className="pSong-item">
                    <div>
                      <img src={pSong.simage} alt="pSong-cover" />
                    </div>

                    <div>
                      <h4>{pSong.sname}</h4>
                      <p>{pSong.artist}</p>
                    </div>
                  </div>
                </td>
                <td>{pSong.albumName}</td>
                <td>{pSong.hour}</td>
                <td>{pSong.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaylistOne;
