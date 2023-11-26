import React, { useState, useEffect, useRef } from "react";

import Group from "../../resources/img/Group 1.svg";
import "../cases/Cases.css";

const Cases2 = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  });

  const data = [
    {
      titles: "Запрос:",
      info: "Клиент хочет уйти от партнера, но не хватает решительности, понимает, что отношения не здоровые, но ничего не может с собой сделать. Клиент успешная в работе, но чувствует себя полной неудачницей в отношениях.",
    },
    {
      titles: "Как работаем?",
      info: "В работе выходим на ситуацию, где у клиентки рано умер отец, взрослые скрывали, хотя она все поняла. Не простилась. Не чувствовала внутреннюю опору, безопасность. Проработали прощание с отцом, внутреннюю опору.",
    },
    {
      titles: "Сколько работали?",
      info: "3 консультации. ",
    },
    {
      titles: "Результат:",
      info: "Клиентке удается завершить отношения и переключить внимание на себя. Чувство безопасности, комфорта, гордость.",
    },
  ];

  return (
    <div className="cases_bloc block">
      <div onClick={() => setToggle(!toggle)} className="cases_item _item">
        <span>Как разорвать отношения?</span>
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
              aria-hidden={toggle ? "true" : "false"} key={i}
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

export default Cases2;
