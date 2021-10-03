import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    searchText: "",
  };

  inputSearchHandle = (e) => {
    this.setState({ searchText: e.target.value });
  };

  onInputSubmit = (e) => {
    e.preventDefault();
    this.setState({ searchText: "" });
  };

  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.onInputSubmit}>
          <input
            type="text"
            placeholder="Search album by artist and album title ..."
            name="search"
            onChange={this.inputSearchHandle}
            value={this.state.searchText}
          />

          <i
            onClick={() => this.props.search(this.state.searchText)}
            className="fa fa-search"
          ></i>
        </form>
        <div className="album_item">
          {this.props.searchItem.length === 0 ? (
            ""
          ) : (
            <div className="album">
              <div className="album_info">
                <img
                  src={this.props.searchItem.albumCover}
                  alt="Album-cover"
                  className="album_img"
                />
                <p className="album-title">{this.props.searchItem.album}</p>
                <span className="album_artist">
                  {this.props.searchItem.artist}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBar;
