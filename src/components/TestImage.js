import React , {Component} from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

//  231 Upload doc
//  436 view doc
//  687 input to file upload
//  35
//  57

class fn extends Component {

    changeActivityDocumentListener = (event) => {
        this.setState({
            ...this.state,
            document: event.target.files[0],
            document_id: null
        })
    }

    uploadDocumentActivity = () => {
        if (this.state.document !== null) {
            this.setState({
                ...this.state,
                progress: true
            })
            const formData = new FormData();
            formData.append('file', this.state.document);
            formData.append('uploader', this.props.id);
            axios.post('/upload_document', formData).then(response => {
                if (response.data) {
                    this.setState({
                        ...this.state,
                        document_id: response.data.id,
                        progress: false
                    })
                    this.savingDiagramInstance();
                } else {
                    this.setState({
                        ...this.state,
                        error_snackbar: true,
                        error_message: "Oh No, We failed uploading your document, Kindly try again!",
                        progress: false
                    })
                }
            }).catch(error => {
                console.log("Error", error);
                this.setState({
                    ...this.state,
                    error_snackbar: true,
                    error_message: "Oh No, We failed uploading your document, Kindly try again!",
                    progress: false
                })
            })

        }
    }

    viewUploadedFile = () => {
        this.setState({
            ...this.state,
            progress: true
        })
        if (this.state.document_id !== null) {
            axios.post('/get_document', {
                id: this.state.document_id
            }, { responseType: 'arraybuffer' }).then(response => {
                if (response.data) {
                    this.setState({
                        ...this.state,
                        image: URL.createObjectURL(response.data)
                    })
            //         const file = new Blob([response.data], { type: 'application/png' });
            //         let reader = new FileReader();
            //         reader.readAsDataURL(file);
            //         reader.onloadend = function () {
            //             let base64String = reader.result;
            //             document.getElementById('avatar-image').src = "data:image/png;base64"+base64String;
            //             console.log(base64String);
            // }
            //         const fileURL = URL.createObjectURL(file);
            //         window.open(fileURL, "_blank");
                } else {

                }
            }).catch(error => {
                console.log("Error", error);
            })
            this.setState({
                ...this.state,
                progress: false
            })
        }
    }


    render(){
        return(
            <div>
                <Grid item>
                    <CloudUploadIcon />
                </Grid>
                <Grid item>
                    <label htmlFor="file-upload"
                        style={{
                            border: "1px solid #ccc", display: "inline-block", padding: "6px 12px",
                            cursor: "pointer"
                        }}>{this.state.document ? this.state.document.name : "Upload document"}</label>
                    <input type='file' style={{ display: "none" }} id="file-upload" accept="image/png, image/jpeg"
                        onChange={this.changeActivityDocumentListener} />
                </Grid>
            </div>

        
        );
    }
}

export default fn;
