import React, { useState, useEffect, useRef } from "react";

import Group from "../../resources/img/Group 1.svg";
import "../cases/Cases.css";

const Cases6 = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  });

  const data = [
    {
      titles: "Запрос:",
      info: "У клиентки не складываются отношения с женщинами. Видит в каждой второй врага, опасность, зависть.",
    },
    {
      titles: "Как работаем?",
      info: "В работе находим ситуацию, где девушку совсем маленькую оставили надолго в другом городе. Большая обида на маму. Конечно, клиентка плачет, маму прощает, уходит напряжение в общении с окружающими женщинами. ",
    },
    {
      titles: "Сколько работали?",
      info: "2 консультации.",
    },
    {
      titles: "Результат:",
      info: " Мир становится более приветливый в ответ. Меняется отношение к женщинам.",
    },
  ];

  return (
    <div className="cases_bloc block">
      <div onClick={() => setToggle(!toggle)} className="cases_item _item">
        <span>Все женщины - конкурентки?</span>
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

export default Cases6;
