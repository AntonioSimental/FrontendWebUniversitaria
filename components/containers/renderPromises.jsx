"use client";

import "../../styles/pagesStyles/software.css";
import { useEffect, useState } from "react";

export default function RenderPromises({ link1, link2, link3, link4 }) {
  const [digimon, setDigimon] = useState(null);
  const [various, setVarious] = useState(null);
  // Promise .then
  useEffect(() => {
    fetch(link1)
      .then((res) => res.json())
      .then((data) => {
        const info = data[0];
        setDigimon(info);
      });
  }, []);

  // Promise .all}
  useEffect(() => {
    Promise.all([
      fetch(link2).then((res) => res.json()),
      fetch(link3).then((res) => res.json()),
      fetch(link4).then((res) => res.json()),
    ]).then((res) => {
      const pokemon = res[1];
      const digimon = res[0][0];
      const country = res[2][0];
      setVarious([digimon, pokemon, country]);
    });
  }, []);

  return (
    <div className="cards__container">
      {/* Render by promise .then */}
      <div style={{background: "#d00", color:"#fff"}} className="software__card">
        {digimon ? (
          <h2>{digimon.name}</h2>
        ) : (
          <img
            className="image__card"
            src="/images/loading3.gif"
            alt="loading"
          />
        )}
        {digimon ? (
          <p>{digimon.level}</p>
        ) : (
          <img
            className="image__card"
            src="/images/loading3.gif"
            alt="loading"
          />
        )}
        {digimon ? (
          <img className="image__card" src={digimon.img} alt="digimon" />
        ) : (
          <img
            className="image__card"
            src="/images/loading3.gif"
            alt="loading"
          />
        )}

        {digimon ? (
          <p>Rendered by <b>Promise .then</b></p>
        ) : (
          <img
            className="image__card"
            src="/images/loading3.gif"
            alt="loading"
          />
        )}
      </div>

        {/* Render by promise .all */}

      <div style={{background: "#0bc", color:"#fff"}} className="software__card">
        {various ? (
          <h2>{various[1].name}</h2>
        ) : (
          <img
            className="image__card"
            src="/images/loading5.gif"
            alt="loading"
          />
        )}
        {various ? (
          <p>{various[1].height / 10}m</p>
        ) : (
          <img
            className="image__card"
            src="/images/loading5.gif"
            alt="loading"
          />
        )}
        {various ? (
          <img src={various[1].sprites.front_default} alt="" />
        ) : (
          <img
            className="image__card"
            src="/images/loading5.gif"
            alt="loading"
          />
        )}
        {various ? (
          <p>Rendered by <b>Promise .all</b></p>
        ) : (
          <img
            className="image__card"
            src="/images/loading5.gif"
            alt="loading"
          />
        )}
      </div>

      <div style={{background: "#0bc", color:"#fff"}} className="software__card">
        {various ? (
          <h2>{various[0].name}</h2>
        ) : (
          <img
            className="image__card"
            src="/images/loading4.gif"
            alt="loading"
          />
        )}
        {various ? (
          <p>{various[0].level}</p>
        ) : (
          <img
            className="image__card"
            src="/images/loading4.gif"
            alt="loading"
          />
        )}
        {various ? (
          <img className="image__card" src={various[0].img} alt="" />
        ) : (
          <img
            className="image__card"
            src="/images/loading4.gif"
            alt="loading"
          />
        )}
        
        {various ? (
          <p>Rendered by <b>Promise .all</b></p>
        ) : (
          <img
            className="image__card"
            src="/images/loading4.gif"
            alt="loading"
          />
        )}
      </div>

      <div style={{background: "#0bc", color:"#fff"}} className="software__card">
        {various ? (
          <h2>{various[2].name.official}</h2>
        ) : (
          <img
            className="image__card"
            src="/images/loading2.gif"
            alt="loading"
          />
        )}
        {various ? (
          <p>{various[2].region}</p>
        ) : (
          <img
            className="image__card"
            src="/images/loading2.gif"
            alt="loading"
          />
        )}
        {various ? (
          <img className="image__card" src={various[2].flags.png} alt="" />
        ) : (
          <img
            className="image__card"
            src="/images/loading2.gif"
            alt="loading"
          />
        )}

        {various ? (
          <p>Rendered by <b>Promise .all</b></p>
        ) : (
          <img
            className="image__card"
            src="/images/loading2.gif"
            alt="loading"
          />
        )}
      </div>
    </div>
  );
}
