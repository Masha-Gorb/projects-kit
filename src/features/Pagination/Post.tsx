import React from 'react';
import {Card, CardActionArea, Grid} from "@mui/material";

export type PostPropsType = {
  title: string
  author: string
  url: string
}

const style = {
  marginTop: '20px',
  marginLeft: '100px',
}

export const Post = (props: PostPropsType) => {
  return (
    <div style={style}>
      <Grid container spacing={0}>
        <Grid xs={3}>
          <Card variant="outlined">
            <h3>{props.title}</h3>
            <CardActionArea>
              <br/>
              <span>автор: {props.author}</span>
              <br/>
              <a href={props.url}>перейти к статье</a>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>

    </div>
  )
}
