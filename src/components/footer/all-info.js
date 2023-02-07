import { Grid } from '@mui/material';
import React from 'react'

const InfoContents= () => {
  return (
    <Grid container spacing={0}>
        <Grid item lg={4}>
            Hello1
        </Grid>
        
        <Grid item lg={4}>hello2
        </Grid>

        <Grid item lg={4}>Hello 2
        </Grid>

    </Grid>
    
  );
}

export default InfoContents;
