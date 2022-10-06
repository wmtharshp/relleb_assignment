import React from 'react'
import styled from 'styled-components'
import client from '../config'

export const Main = styled.div`
  display:flex;
  flex-direction:row;
  gap:10px;
  justify-content:center;
  margin:25px 0px;
  @media(max-width:480px) {
    width:100%;
    justify-content:center
  }
`
export const SearchBtn = styled.button`
  background:dodgerblue;
  color:white;
  border:1px solid dodgerblue
`

export const SearchInput = styled.input`
  padding:10px; 
  width:18rem;
`


export default function Search({ setWatches, watches }) {

  const handleOnClick = async (searchValueOne) => {
    const result = await client.search({
      index: "watches",
      body: {
        query: {
          multi_match: {
            query: searchValueOne,
            fields: ["name", "brand_name"],
          },
        },
      },
    })
    setWatches(result.hits.hits)
  }

  const handleInput = (e) => {
    if (e.target.value.length === 0) {
      client.search({
        index: "watches",
      }).then(function (resp) {
        setWatches(resp.hits.hits);
      }, function (err) {
        return err.message;
      });
    }
    if (e.target.value.length > 3) {
      handleOnClick(e.target.value);
    }
  }
  return (
    <Main>
      <SearchInput onChange={(e) => handleInput(e)} type='text' placeholder='Search Watches...'></SearchInput>
      {/* <SearchBtn onClick={handleOnClick}>Search</SearchBtn> */}
    </Main>
  )
}

