import React, { useState, useEffect, useRef } from "react";

import Group from "../../resources/img/Group 1.svg";
import "../cases/Cases.css";

const Cases4 = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  });

  const data = [
    {
      titles: "Запрос:",
      info: "Ребенок 9 лет. Постоянно болеет. Не складываются отношения со сверстниками, постоянно впадает в состояние жертвы. ",
    },
    {
      titles: "Как работаем?",
      info: "В работе выходим на то, что у мамы был выкидыш, который не был оплакан. Также в подростковом возрасте мама сталкивалась с психологическим насилием со стороны родителей. Состояние мамы отразилось на ребенке.  ",
    },
    {
      titles: "Сколько работали?",
      info: "4 консультации. ",
    },
    {
      titles: "Результат:",
      info: "Контакт с ребенком улучшился. Ребенок начал открываться, проговаривать сложные ситуации, частота болезней снижается. Продолжаем работу с мамой.",
    },
  ];

  return (
    <div className="cases_bloc block">
      <div onClick={() => setToggle(!toggle)} className="cases_item _item">
        <span>Ребенок постоянно болеет!</span>
        <img className={toggle ? "cross_activ" : "cross"} src={Group} alt="" />
      </div>
      <div
        className={toggle ? "accordion__body animated" : "accordion__body "}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        {data.map((item, i) => {
          return (
            <p
              className="cases_item_tit _item_tit"
              aria-hidden={toggle ? "true" : "false"}
              key={i}
            >
              <span className="cases_titles">{item.titles}</span>
              <br /> {item.info}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Cases4;
