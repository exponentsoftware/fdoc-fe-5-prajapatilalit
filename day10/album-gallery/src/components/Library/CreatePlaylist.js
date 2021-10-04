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
              name="pname"
              placeholder="Add Playlist Title"
              onChange={(e) => this.setState({ pname: e.target.value })}
              value={this.state.pname}
              required={true}
            />
            <input
              type="text"
              name="createdBy"
              placeholder="Add created by"
              onChange={(e) => this.setState({ createdBy: e.target.value })}
              value={this.state.createdBy}
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
