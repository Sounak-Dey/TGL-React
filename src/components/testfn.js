import React from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Grid from '@material-ui/core/Grid';

function func() {
    return(
        <div>
            <>
        <Grid item>
            <CloudUploadIcon />
        </Grid>
        <Grid item>
            <input type='file'  id="file-upload" accept="image/png, image/jpeg" />
        </Grid>
    </>
        </div>
    );

}

export default func;

// const uploadImage = (event) => {

//     setPhoto(event.target.files[0]);
//     console.log(photo);
// }
    
//         const formData = new FormData();
//         formData.append('file', photo);
//         formData.append('artistId', id);
//             // console.log(formData);

//         axios.post(`${base_url}/artists/upload`, formData).then(
//             response => {
//                 console.log(response);
//                 if (response.data == "ok") {
//                     toast.success("Image sucessfully added!",{
//                         position: "bottom-center",
//                     });

//                 } else {
                    
//                 }
//             }
//         ).catch(error => {
//             console.log("Error", error);
//         })

//     }
// }