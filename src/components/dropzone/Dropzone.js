import React, { Component } from "react";
import "./Dropzone.css";

class Dropzone extends Component {
  constructor(props) {
    super(props);
    this.state = { hightlight: false };
    this.fileInputRef = React.createRef();
    this.openFileDialog = this.openFileDialog.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

//clic dans la boîte de dialogue de téléchargement de fichier.
  openFileDialog() {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  }
//la boîte de dialogue de fichier est fermée et que les fichiers ont été sélectionnés.
//convertir les fichiers que nous avons reçus d'une FileList en tableau
  onFilesAdded(evt) {
    if (this.props.disabled) return;
    const files = evt.target.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  }
  fileListToArray(list) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  }

  //définir hightlight sur true au cas où le composant ne serait pas désactivé.
  onDragOver(event) {
    event.preventDefault();/// événement fonctionne de façon identique sur tous les navigateurs.(comportemment par defaut)
    if (this.props.disabed) return;
    this.setState({ hightlight: true });
  }

  onDragLeave(event) {
    this.setState({ hightlight: false });
  }
  /*Si un fichier est déposé sur le composant, nous devons en informer le composant parent.
   Pour ce faire, nous appelons la propriété onFilesAdded.
  Si le composant est désactivé, nous ne faisons rien.*/
  onDrop(event) {
    event.preventDefault();
    if (this.props.disabed) return;
    const files = event.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  }

  
  render() {
    return (
      <div
      //variable highlightous on utilise pour mettre en évidence la zone de dépôt
      // lorsqu'un fichier est glissé dessus
        className={`Dropzone ${this.state.hightlight ? "Highlight" : ""}`}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
        style={{ cursor: this.props.disabled ? "default" : "pointer" }}
      >
        <input
          ref={this.fileInputRef}
          className="FileInput"
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
        <img
          alt="upload"
          className="Icon"
          src="baseline-cloud_upload-24px.svg"
        />
        <span>Upload Files</span>
      </div>
    );
  }
}

export default Dropzone;
