import React, { Component } from "react";
import * as app from 'firebase';

class ImageUpload extends Component {
    constructor(props) {
      super(props);
      this.state = {
        image: null,
        url: "",
        progress: 0
      };
    }
  
   
  
    handleChange = e => {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        this.setState(() => ({ image }));
      }
    };
  
    handleUpload = () => {
      const storage = app.storage();
      const auth = app.auth();
      const userUid = auth.currentUser.uid;

      const { image } = this.state;
      const uploadTask = storage.ref(`listings/${userUid}/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        snapshot => {
          // progress function ...
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          this.setState({ progress });
        },
        error => {
          // Error function ...
          console.log(error);
        },
        () => {
          // complete function ...
          storage
            .ref(`listings/${userUid}`)
            .child(image.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ url });
            });
        }
      );
    };
    render() {
      
      return (
        <div>
            <input type="file" onChange={this.handleChange} /><progress value={this.state.progress} max="100" className="progress" />
            
            <button
            onClick={this.handleUpload}
            className="waves-effect waves-light btn"
            >
            Upload
            </button>
            <br />
            <img
            src={this.state.url || "https://via.placeholder.com/400x300"}
            alt="Uploaded Images"
            height="150"
            width="200"
            />
        </div>
      );
    }
  }
  
  export default ImageUpload;