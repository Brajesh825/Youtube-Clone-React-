import React from "react";
import "./_header.scss";

import { FaBars } from "react-icons/fa/";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications, MdApps } from "react-icons/md";

const Header = ({handleToggleSidebar}) => {
  return (
    <div className="border border-dark header">
      <FaBars className="header__menu" size={26}
      onClick={()=> handleToggleSidebar()} />
      <img
        src="http://pngimg.com/uploads/youtube/youtube_PNG2.png"
        className="header__logo"
      />
      <form>
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={22} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={26} />
        <img
          src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
