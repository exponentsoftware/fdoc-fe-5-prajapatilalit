import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = (props) => {
  return (
    <>
      <div className="nav">
        <div className="nav-container">
          <Link to="/" className="logo">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgcPZDK8pLbgCwKEZvOSvBnn-VmFjYtCfoIkL57XvsTuX76g0_1YBZ4XjRJ3bGl-e1ZZo&usqp=CAU"
              alt="logo"
            />
            <span className="sp">Music-Gallery</span>
          </Link>
          <SearchBar
            search={props.onSearch}
            searchItem={props.searchLists}
            removeItem={props.removeAlbum}
          />

          <div className="nav-item">
            <ul>
              <Link to="/addalbum">
                <li>AddAlbum</li>
              </Link>
              <Link to="/albums">
                <li>Albums</li>
              </Link>
              <Link to="/CreatePlaylist">
                <li>Create playlist</li>
              </Link>
              <Link to="/library">
                <li>Library</li>
              </Link>
              <Link to="/">
                <li>Home</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
