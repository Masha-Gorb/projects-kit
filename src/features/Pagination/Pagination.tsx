import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Pagination, TextField} from "@mui/material";
import {Post} from "./Post";
import s from './Pagination.module.css'

const BASE_URL = 'https://hn.algolia.com/api/v1/search?'

export const CustomPagination = () => {

  const [posts, setPosts] = useState<any[]>([])
  const [query, setQuery] = useState<string>('react')
  const [page, setPage] = useState<number>(1)
  const [pageAmount, setPageAmount] = useState<number>(0)


  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`)
      .then(({data}) => {
        console.log(data)
        setPosts(data.hits)
        setPageAmount(data.nbPages)

        if(data.nbPages < page) {
          setPage(1)
        }
      })
      }, [query, page])

    return (
      <div className={s.paginationContainer}>
        <TextField
          margin="normal"
          label="что ищем?"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />

        <Pagination
        count={pageAmount}
        page={page}
        onChange={(_, num) => setPage(num)}
        showFirstButton
        showLastButton
      />
        <div className={s.pagination}>
          {posts.map(p => {
            return <div key={p.objectID}>
              <Post
                title={p.title}
                author={p.author}
                url={p.url}
                likes={p.points}
              />
            </div>
          })}
        </div>
      </div>
    )
  }
