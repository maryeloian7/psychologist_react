import { NavLink } from "react-router-dom";
import "../servicee/Service.css";

const Service = () => {
  const data = [
    {
      service: "Сессия",
      time: "≈ 1,5 часа",
      price: "50 €",
      button: "Записаться",
    },
    {
      service: "Чат с психологом",
      time: "1 неделя ",
      time2:"(30 мин. в день)",
      price: "70 €",
      button: "Записаться",
    },
    {
      service: "Интенсивная проработка",
      time: "Личные консультации раз в неделю в течение 1 месяца. Практики, задания, на связи в течение рабочего дня. ",
      price: "350 €",
      button: "Записаться",
    },
  ];
  return (
    <div className="service" id="Service">
      <div className="service_bloc _container">
        <h2 className="service_title">Услуги</h2>
        <div className="service_content">
          {data.map((i) => {
            return (
              <div className="service_inform block__button" key={i}>
                <div className="service_title_inform">{i.service}</div>
                <p className="service_text _serv_text">{i.time}<br/>{i.time2}</p>
                <p className="service_price">{i.price}</p>
                <div className="service__block__button _block__button service__button">
                  <NavLink to="/form" data-modal>
                    <div className="text_button">{i.button}</div>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className="important">
          *Важно! Запись в директе или здесь. Дата и время закрепляется после
          оплаты.
        </div>
      </div>
    </div>
  );
};

export default Service;
