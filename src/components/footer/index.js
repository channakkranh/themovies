import { Grid, Typography } from "@mui/material";
import { bgcolor } from "@mui/system";
import React from "react";
import InfoContents from "./all-info";


const ComponentFooter = () => {
  return (
    <Grid container spacing={0} backgroundColor='#330031' marginTop={10} color="white">
       <Grid item lg={12}>
            <InfoContents/>
       </Grid>
       <Grid item lg={12}  >
        <Typography sx={{display:'flex', alignItems:'center',flexDirection:'column' }} >Copy Right</Typography>
       </Grid>
    </Grid>
  )
}

export default ComponentFooter;