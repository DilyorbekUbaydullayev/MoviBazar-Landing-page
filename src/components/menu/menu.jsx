import React from "react";
import stl from "./menu.module.css";
import { IoIosSearch } from "react-icons/io";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Menu = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("iron");
  const sections =['Films','Social','Videos','News','About']
  const film_types = ['Premiere','Popular','Top Rated','Upcoming','Airing Today']
  const handeSearch = (e)=>{
    setSearch(e.target.value);
  }
  const getId = (imdbID) => {
    window.open(`https://www.imdb.com/title/${imdbID}/`, "_blank");
  };

  useEffect(() => {
    axios
      .get("https://movie-database-alternative.p.rapidapi.com/", {
        params: {
          s: search,
          r: "json",
          page: "1",
        },
        headers: {
          "x-rapidapi-key":
            "73a675da0bmsh553404d83bdf86dp1b263ajsn0ac0438eb20f",
            // if the monthly subscription is over, the data may not be available
          "x-rapidapi-host": "movie-database-alternative.p.rapidapi.com",
        },
      })
      .then((res) => {
        setData(res.data.Search);
      })
      .catch((err) => console.error(err));
  }, [search]);
  return (
    <div className="ps-3">
      <Row>
        <Col className="text-start ">
          <div className={stl.div1}>
            <IoIosSearch size={24} className={stl.searchIcon} />
            <input
              type="text"
              placeholder="Search for movies..."
              className={stl.searchInput}
              onChange={(e)=>handeSearch(e)}
            />
          </div>
        </Col>
        <Col>
          <div className={stl.div2}>
            <ul className={stl.menuList}>
              {sections.map((item,i)=>(
                <li key={i} className={stl.menuItem}>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="text-start mt-2" md={2}>
          <h5 style={{ color: "#2700FB" }}>All Films</h5>
        </Col>
        <Col className={stl.col}>
          {film_types.map((type,i)=>(
            <p key={i}>{type}</p>
          ))}
        </Col>
      </Row>
      <div className={stl.div3} >
  {data ? data.map((item, i) => {
    return (
      <div className={stl.div4} key={i}>
        <img
          src={item.Poster}
          alt={item.Title}
          onClick={() => getId(item.imdbID)}
        />
        <p className="mt-3">{item.Title}</p>
      </div>
    );
  }) : Array.from({ length: 4 }).map((_, i) => {
    return (
      <div className={stl.div4} key={i}>
        <p className="mt-3">Loading...</p>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default Menu;
