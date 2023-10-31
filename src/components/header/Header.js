import "./Header.css"

const Header = () => {
  return (
    <div>
      <header className="header " id="header">
        <nav className="header_block _container">
          <a href="#header" className="header_logo">
            <img src="{LogoIcon.src}" alt="logo" />
          </a>
          <ul className="header_items">
            <li className="header_item _work">
              <a href="#BodyContent" className="header_itemLink">
                Направления моей работы
              </a>
            </li>
            <li className="header_item">
              <a href="#HowWork" className="header_itemLink">
                Как я работаю ?
              </a>
            </li>
            <li className="header_item">
              <a href="#Cases" className="header_itemLink">
                Кейсы
              </a>
            </li>
            <li className="header_item">
              <a href="#Service" className="header_itemLink">
                Услуги
              </a>
            </li>
            <li className="header_item">
              <a href="#Footer" className="header_itemLink">
                Контакты
              </a>
            </li>
          </ul>
          <div className="">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
