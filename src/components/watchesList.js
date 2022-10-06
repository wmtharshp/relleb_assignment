import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Watch from "./watch";
import { useEffect } from "react";
import client from "../config";

export const Grid = styled.div`
    box-sizing:border-box;  
    margin-top:10px;
    padding:5px;    
    display:flex;  
    column-gap:20px;
    row-gap:30px;  
    flex-wrap: wrap;
    @media(max-width:480px) {
    flex-direction:column;
    row-gap:20px;
    }
`;

export default function Watches({watches, setWatches}) {

  const getWatches = async () => {
    client.search({
      index: "watches",
    }).then(function (resp) {
      setWatches(resp.hits.hits);
    }, function (err) {
      return err.message;
    });
  }


  useEffect(() => {
    getWatches()
  }, []);


  return (
    <Grid>
      {
        watches.length > 0 && watches.map((watch) => {
          {
            return <Watch watch={watch} key={watch._id} />
          }
        })
      }
    </Grid>
  )
}


