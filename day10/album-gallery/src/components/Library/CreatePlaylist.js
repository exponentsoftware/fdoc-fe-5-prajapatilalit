import React, { Component } from "react";

class createPlaylist extends Component {
  state = {
    pname: "",
    createdBy: "",
    pimage: null,
  };

  fileSelectHandleChange = (e) => {
    const currFile = e.target.files[0];
    this.setState({
      pimage: URL.createObjectURL(currFile),
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { pimage, pname, createdBy } = this.state;
    const newPlaylist = {
      id: new Date().getTime().toString(),
      pname: pname,
      createdBy: createdBy,
      pimage: pimage,
    };

    const playlist = this.props.onCreate(newPlaylist);

    this.setState({
      pname: "",
      createdBy: "",
      pimage: null,
      playlist: playlist,
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
            <input
              type="file"
              accept="image/*"
              name="playlistCover"
              onChange={this.fileSelectHandleChange}
              required={true}
            />

            <button className="btn">Create</button>
          </form>
        </div>
      </>
    );
  }
}
export default createPlaylist;
