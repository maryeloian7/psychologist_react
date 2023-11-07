import React, { useState, useEffect, useRef } from "react";

import Group from "../../resources/img/Group 1.svg";
import "../cases/Cases.css";

const Cases5 = () => {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  });

  const data = [
    {
      titles: "Запрос:",
      info: "Клиент боится проявляться. Хочет развивать свое дело в соц сетях, но страшно показаться там не идеальной. Если и выходит в онлайн, готовится сто лет.",
    },
    {
      titles: "Как работаем?",
      info: "В работе выходим на ситуацию с отцом, который выпивал и в эти моменты сильно менялся, рядом с ним было небезопасно, не предсказуемо. Заходим в травмирующую ситуацию, выражаем все эмоции, гипертрофируем, тело расслабляется, отпускает ситуацию. ",
    },
    {
      titles: "Сколько работали?",
      info: "3 консультации.",
    },
    {
      titles: "Результат:",
      info: " Все еще страшно, но прогресс на лицо, в соц сети клиент выходит чаще, не так долго готовится.",
    },
  ];

  return (
    <div className="cases_bloc block">
      <div onClick={() => setToggle(!toggle)} className="cases_item _item">
        <span>Боюсь заявить о себе</span>
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

export default Cases5;
