import React, { Component } from "react";

class createPlaylist extends Component {
  state = {
    playlistTitle: "",
    playlistDiscription: "",
  };

  fileSelectHandleChange = (e) => {
    const currFile = e.target.files[0];
    this.setState({
      albumCover: URL.createObjectURL(currFile),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { playlistTitle, playlistDiscription } = this.state;
    const newPlaylist = {
      id: new Date().getTime().toString(),
      playlistTitle,
      playlistDiscription,
    };

    const playlist = this.props.onAddPlaylist(newPlaylist);

    this.setState({
      playlistTitle: "",
      playlistDiscription: "",

      library: playlist,
    });
  };

  render() {
    return (
      <>
        <div className="addAlbum-header">
          <form onSubmit={this.handleSubmit} className="addAlbum-form">
            <h2>Add Play List Here</h2>
            <input
              type="text"
              name="playlistTitle"
              placeholder="Add Playlist Title"
              onChange={(e) => this.setState({ playlistTitle: e.target.value })}
              value={this.state.playlistTitle}
              required={true}
            />
            <input
              type="text"
              name="playlistDiscription"
              placeholder="Add Discription"
              onChange={(e) =>
                this.setState({ playlistDiscription: e.target.value })
              }
              value={this.state.playlistDiscription}
            />

            <button className="btn">Create</button>
          </form>
        </div>
      </>
    );
  }
}
export default createPlaylist;
