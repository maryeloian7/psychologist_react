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
      cases_item: "Плохая мама?",
      titles: "Запрос:",
      info: "Мама постоянно срывается на ребенка, плачет, может даже схватить, трясти, толкнуть, а после испытывает ужасное чувство вины. И так по кругу. Хочет научиться себя контролировать. ",
      howWork: "Как работаем?",
      howWorkInfo:
        "В работе выходим на сильную обиду на маму. Клиент чувствовала себя покинутой в 4 года, много слез. Допроживаем ту старую ситуацию из детства, где она замерла, не высказала. Выражаем все эмоции, слезы, тело отпускает ситуацию.",
      time: "Сколько работали? ",
      timeInfo: "2 консультации. ",
      done: "Результат:",
      doneInfo:
        "В моменты усталости, злости больше не возникает желания толкнуть, трясти. Клиент стала более спокойной. Уровень раздражения значительно ниже.",
    },
    {
      cases_item: "Как разорвать отношения?",
      titles: "Запрос:",
      info: "Клиент хочет уйти от партнера, но не хватает решительности, понимает, что отношения не здоровые, но ничего не может с собой сделать. Клиент успешная в работе, но чувствует себя полной неудачницей в отношениях.",
      howWork: "Как работаем?",
      howWorkInfo: "В работе выходим на ситуацию, где у клиентки рано умер отец, взрослые скрывали, хотя она все поняла. Не простилась. Не чувствовала внутреннюю опору, безопасность. Проработали прощание с отцом, внутреннюю опору.",
      time: " Сколько работали? ",
      timeInfo: "3 консультации. ",
      done: "Результат:",
      doneInfo: "Клиентке удается завершить отношения и переключить внимание на себя. Чувство безопасности, комфорта, гордость.",
    },
    {
      cases_item: "Как похудеть ?",
      titles: "Запрос:",
      info: " Клиент не может похудеть. С подросткового возраста толстая, постоянные диеты, а худой никогда не была.",
      howWork: "Как работаем?",
      howWorkInfo: "В работе выходим на травму насилия. Работаем со старой установкой «Быть привлекательной небезопасно». ",
      time: " Сколько работали? ",
      timeInfo: "5 консультаций. ",
      done: "Результат:",
      doneInfo: "Отеки начинают уходить. Вес снизился с 93 кг до 85 кг почти за 3 месяца после окончания работы.",
    },
    {
      cases_item: "Ребенок постоянно болеет!",
      titles: "Запрос:",
      info: "Ребенок 9 лет. Постоянно болеет. Не складываются отношения со сверстниками, постоянно впадает в состояние жертвы. ",
      howWork: "Как работаем?",
      howWorkInfo: "В работе выходим на то, что у мамы был выкидыш, который не был оплакан. Также в подростковом возрасте мама сталкивалась с психологическим насилием со стороны родителей. Состояние мамы отразилось на ребенке.  ",
      time: " Сколько работали? ",
      timeInfo: "4 консультации. ",
      done: "Результат:",
      doneInfo: "Контакт с ребенком улучшился. Ребенок начал открываться, проговаривать сложные ситуации, частота болезней снижается. Продолжаем работу с мамой.",
    },
    {
      cases_item: "Боюсь заявить о себе",
      titles: "Запрос:",
      info: "Клиент боится проявляться. Хочет развивать свое дело в соц сетях, но страшно показаться там не идеальной. Если и выходит в онлайн, готовится сто лет.",
      howWork: "Как работаем?",
      howWorkInfo: "В работе выходим на ситуацию с отцом, который выпивал и в эти моменты сильно менялся, рядом с ним было небезопасно, не предсказуемо. Заходим в травмирующую ситуацию, выражаем все эмоции, гипертрофируем, тело расслабляется, отпускает ситуацию. ",
      time: " Сколько работали? ",
      timeInfo: "3 консультации. ",
      done: "Результат:",
      doneInfo: "Все еще страшно, но прогресс на лицо, в соц сети клиент выходит чаще, не так долго готовится. ",
    },
    {
      cases_item: "Все женщины - конкурентки?",
      titles: "Запрос:",
      info: "У клиентки не складываются отношения с женщинами. Видит в каждой второй врага, опасность, зависть.",
      howWork: "Как работаем?",
      howWorkInfo: "В работе находим ситуацию, где девушку совсем маленькую оставили надолго в другом городе. Большая обида на маму. Конечно, клиентка плачет, маму прощает, уходит напряжение в общении с окружающими женщинами. ",
      time: " Сколько работали? ",
      timeInfo: "2 консультации.  ",
      done: "Результат:",
      doneInfo: "Мир становится более приветливый в ответ. Меняется отношение к женщинам.",
    },
  ];

  return (
//     <>
//         {data.map((item) => {
//             return(
//                 <div className="cases_bloc cases_bloc1 block" key={item}>
//                 <div onClick={() => setToggle(!toggle)} className="cases_item _item">
//                   <span>{item.cases_item}</span>
//                   <img className={toggle ? "cross_activ" : "cross"} src={Group} alt="" />
//                 </div>
//                 <div
//                   className={toggle ? "accordion__body animated" : "accordion__body "}
//                   style={{ height: toggle ? `${heightEl}` : "0px" }}
//                   ref={refHeight}
//                 >
//                   <p
//                     className="cases_item_tit _item_tit"
//                     aria-hidden={toggle ? "true" : "false"}
//                   >
//                     <span className="cases_titles">{item.titles}</span>
//                     <br /> {item.info}
//                   </p>
//                   <p className="cases_item_tit" aria-hidden={toggle ? "true" : "false"}>
//                     <span className="cases_titles">{item.howWork}</span> <br />
//                     {item.howWorkInfo}
//                   </p>
//                   <p className="cases_item_tit" aria-hidden={toggle ? "true" : "false"}>
//                     <span className="cases_titles">{item.time}</span>
//                     <br />{item.timeInfo}
//                   </p>
//                   <p className="cases_item_tit" aria-hidden={toggle ? "true" : "false"}>
//                     <span className="cases_titles">{item.done}</span>
//                     <br /> {item.doneInfo}
//                   </p>
//                 </div>
//               </div>
//             )
//         })

// }
//     </>

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
        <p
          className="cases_item_tit _item_tit"
          aria-hidden={toggle ? "true" : "false"}
        >
          <span className="cases_titles">Запрос:</span>
          <br /> Мама постоянно срывается на ребенка, плачет, может даже
          схватить, трясти, толкнуть, а после испытывает ужасное чувство вины. И
          так по кругу. Хочет научиться себя контролировать.
        </p>
        <p className="cases_item_tit" aria-hidden={toggle ? "true" : "false"}>
          <span className="cases_titles">Как работаем?</span> <br />В работе
          выходим на сильную обиду на маму. Клиент чувствовала себя покинутой в
          4 года, много слез. Допроживаем ту старую ситуацию из детства, где она
          замерла, не высказала. Выражаем все эмоции, слезы, тело отпускает
          ситуацию.
        </p>
        <p className="cases_item_tit" aria-hidden={toggle ? "true" : "false"}>
          <span className="cases_titles">Сколько работали? </span>
          <br />2 консультации.
        </p>
        <p className="cases_item_tit" aria-hidden={toggle ? "true" : "false"}>
          <span className="cases_titles">Результат:</span>
          <br />
        </p>
      </div>
    </div>
  );
};

export default Cases1;
