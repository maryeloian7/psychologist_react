import { useState } from "react";

import "./Header.css";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const onNavMenuOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const closeMenu = () => {
    setIsBurgerOpen(false);
  };
  const menuItems = [
    "Направления моей работы",
    "Как я работаю?",
    "Кейсы",
    "Услуги",
    "Контакты",
  ];
  return (
    <div>
      <header className="header " id="header">
        <nav className="header_block _container">
          <a href="#header" className="header_logo">
            <img src="{LogoIcon.src}" alt="logo" />
          </a>
          <ul
            onClick={closeMenu}
            className={isBurgerOpen ? "header_items active" : "header_items"}
          >
            {menuItems.map((items) => {
              return (
                <li className="header_item _work" key={items}>
                  <a href="#BodyContent" className="header_itemLink">
                    {items}
                  </a>
                </li>
              );
            })}
          </ul>
          <div
            className={
              isBurgerOpen ? "toggle mobileBurgerButton" : "mobileBurgerButton"
            }
            onClick={onNavMenuOpen}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3 "></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
