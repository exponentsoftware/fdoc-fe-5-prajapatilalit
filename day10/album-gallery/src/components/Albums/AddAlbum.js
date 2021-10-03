import React, { Component } from "react";

class AddAlbum extends Component {
  state = {
    album: "",
    artist: "",
    albumCover: null,
  };

  fileSelectHandleChange = (e) => {
    const currFile = e.target.files[0];
    this.setState({
      albumCover: URL.createObjectURL(currFile),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { album, artist, albumCover } = this.state;
    const newAlbum = {
      id: new Date().getTime().toString(),
      album: album,
      artist: artist,
      albumCover: albumCover,
    };

    const albumList = this.props.onAdd(newAlbum);

    this.setState({
      album: "",
      artist: "",
      albumCover: null,
      albumList: albumList,
    });
  };

  render() {
    return (
      <>
        <div className="addAlbum-header">
          <form onSubmit={this.handleSubmit} className="addAlbum-form">
            <h2>Add Album Here</h2>
            <input
              type="text"
              name="album"
              placeholder="Add Title"
              onChange={(e) => this.setState({ album: e.target.value })}
              value={this.state.album}
              required={true}
            />
            <input
              type="text"
              name="artist"
              placeholder="Add Artist Name"
              onChange={(e) => this.setState({ artist: e.target.value })}
              value={this.state.artist}
              required={true}
            />
            <input
              type="file"
              accept="image/*"
              name="albumCover"
              onChange={this.fileSelectHandleChange}
              required={true}
            />
            <button className="btn">Upload</button>
          </form>
        </div>
      </>
    );
  }
}
export default AddAlbum;
