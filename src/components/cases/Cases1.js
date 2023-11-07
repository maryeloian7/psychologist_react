import React, { useState, useEffect, useRef } from "react";

import Group from "../../resources/img/Group 1.svg";
import "../cases/Cases.css";

const Cases1 = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  });
  const data = [
    {
      titles: "Запрос:",
      info: "Мама постоянно срывается на ребенка, плачет, может даже схватить, трясти, толкнуть, а после испытывает ужасное чувство вины. И так по кругу. Хочет научиться себя контролировать.",
    },
    {
      titles: "Как работаем?",
      info: "В работе выходим на сильную обиду на маму. Клиент чувствовала себя покинутой в  4 года, много слез. Допроживаем ту старую ситуацию из детства, где она замерла, не высказала. Выражаем все эмоции, слезы, тело отпускает  ситуацию.",
    },
    {
      titles: "Сколько работали?",
      info: "2 консультации. ",
    },
    {
      titles: "Результат:",
      info: "В моменты усталости, злости больше не возникает желания толкнуть, трясти. Клиент стала более спокойной. Уровень раздражения значительно ниже.",
    },
  ];

  return (
    <div className="cases_bloc cases_bloc1 block">
      <div onClick={() => setToggle(!toggle)} className="cases_item _item">
        <span>Плохая мама?</span>
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

export default Cases1;
