import React from 'react';
import {IconButton} from "@mui/material";
import HelpCenterRoundedIcon from '@mui/icons-material/HelpCenterRounded';

export const InfoButton = (props: any) => {

  return (
    <div>
      <IconButton onClick={() => alert(props.component)} color="primary" aria-label="upload picture" component="label" size="large">
        <HelpCenterRoundedIcon/>
      </IconButton>
    </div>
  )
}