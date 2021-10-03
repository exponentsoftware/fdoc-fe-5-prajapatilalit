import React from "react";
import { useParams } from "react-router";
import songs from "./index";

const Songs = ({ albums }) => {
  // let albumItem = props.albums;

  // const id = props.albums.id;
  let { id } = useParams();
  // let albumItem = albums.find((item) => item.id === id);
  let albumItem = albums[parseInt(id, 10)];

  console.log(albumItem);
  return (
    <div>
      {
        <div className="album">
          <img
            src={albumItem.albumCover}
            alt="Album-cover"
            className="album_img"
          />
          <p className="album-title">{albumItem.album}</p>
          <span className="album_artist">{albumItem.artist}</span>
        </div>
      }

      <div>
        <table>
          <thead>
            <tr className="table-hading">
              <th>#</th>
              <th>TITLE</th>
              <th>PLAYS</th>
              <th>ALBUM</th>
              <th>
                <i class="far fa-clock"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {songs.map((song, index) => (
              <tr className="table-body">
                <td>{index}</td>
                <td>
                  <div className="song-item">
                    <div>
                      <img src={song.simage} alt="song-cover" />
                    </div>

                    <div>
                      <h4>{song.sname}</h4>
                      <p>{song.artist}</p>
                    </div>
                  </div>
                </td>
                <td>{song.plays}</td>
                <td>{song.albumName}</td>
                <td>{song.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Songs;
