import React from 'react';
import {Card, CardActionArea} from "@mui/material";
import s from './Post.module.css'

export type PostPropsType = {
  title: string
  author: string
  url: string
  likes: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div className={s.postsBlock}>
        <Card variant="outlined">
          <h5>{props.title}</h5>
          <CardActionArea>
            <br/>
            <span>автор: {props.author}</span>
            <br/>
            <a href={props.url}>перейти к статье</a>
            <div>💙{props.likes}</div>
          </CardActionArea>
        </Card>
    </div>

  )
}
