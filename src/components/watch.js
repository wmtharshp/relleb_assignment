import React from "react";
import styled from "styled-components";


export default function Watch({ watch }) {
  return (
    <article className="card">
      <div className="imageOuterDiv">
        <img className="card__img" src={'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80'} alt="frontend-mentor-website-qrcode" />
      </div><div className="card__content">
        <h1 className="card__title">{watch._source.brand_name}</h1>
        <p className="card__desc">{watch._source.name}</p>
        <p className="card__desc">${watch._source.price}</p>
      </div>
    </article>
  )
}