import React from "react";
import stl from "./sidebar.module.css";
import { BsFilm } from "react-icons/bs";
import { PiFilmSlateBold } from "react-icons/pi";
import { PiFilmReelLight } from "react-icons/pi";
import { GiFilmStrip } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { TiMail } from "react-icons/ti";
import { MdMovieEdit, MdOutlineConnectedTv } from "react-icons/md";
const sidebar = () => {
  const sitebar_items = [
    {
      title: "All Films",
      icon: <BsFilm className="mb-1 me-1" />,
    },
    {
      title: "Features",
      icon: (
        <PiFilmReelLight
          className="mb-1 me-1"
          style={{ marginLeft: "-2px", fontSize: "22px" }}
        />
      ),
    },
    {
      title: "Documents",
      icon: <PiFilmSlateBold className=" fs-5 mb-1 " />,
    },
    {
      title: "Shorts",
      icon: <GiFilmStrip className="fs-5 mb-1 me-1" />,
    },
    {
      title: "TV Shows",
      icon: <MdOutlineConnectedTv className="fs-5 mb-1 me-1" />,
    },
    {
      title: "Commercials",
      icon: <MdMovieEdit className="fs-5 mb-1 me-1" />,
    },
  ];

  const socials = [
    <FaFacebookF style={{ marginRight: 1, color: "blue" }} />,
    <TiMail className="fs-5 mb-1" />,
    <FaInstagram style={{ marginRight: 1, color: "red" }} />,
    <FaTwitter style={{ color: "blue" }} />,
  ];

  return (
    <div>
      <h4 className="pb-4" id={stl.headerName}>
        MOVIBAZAR
      </h4>
      <div
        id={stl.div1}
        className="text-start ms-2 ps-4 pt-1 pb-4"
        style={{ borderBottom: "1px solid #fff" }}
      >
        <h5>Films</h5>
        <h5>Series</h5>
        <h5>My List</h5>
      </div>
      <div id={stl.div2} className="text-start ms-2 ps-4 pt-4 pb-3">
        {sitebar_items.map((item, i) => (
          <p key={i}>
            {item.icon}
            {item.title}
          </p>
        ))}
      </div>
      <div className={stl.social}>
        <div className={stl.icons}>
          {socials.map((item, i) => (
            <span key={i} className={stl.icon}> {item} </span>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default sidebar;
