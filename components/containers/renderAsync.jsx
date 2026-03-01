"use client";

import { useEffect, useState } from "react";
import "../../styles/pagesStyles/software.css";

export default function RenderAsync({link}) {
  // Async Await
  const [pokeData, setPokedata] = useState(false);
  useEffect(() => {
    async function callApi() {
      const data = await fetch(link);
      const json = await data.json();
      setPokedata(json);
    }

    callApi();
  });

  return (
    <div className="cards__container">
      <div style={{background: "#00b", color:"#fff"}} key={pokeData.id} className="software__card">
        {pokeData ? (
          <h2 className="pokemon__name">{pokeData.name}</h2>
        ) : (
          <img
            className="image__card"
            src="/images/loading.gif"
            alt="loading"
          />
        )}
        {pokeData ? (
          <p>{pokeData.height / 10}m</p>
        ) : (
          <img
            className="image__card"
            src="/images/loading.gif"
            alt="loading"
          />
        )}
        {pokeData ? (
          <img src={pokeData.sprites.front_default} alt="" />
        ) : (
          <img
            className="image__card"
            src="/images/loading.gif"
            alt="loading"
          />
        )}
        {pokeData ? (
          <p>Rendered by <b>Async Await</b></p>
        ) : (
          <img
            className="image__card"
            src="/images/loading.gif"
            alt="loading"
          />
        )}
      </div>
    </div>
  );
}