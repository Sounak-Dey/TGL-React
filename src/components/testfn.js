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
