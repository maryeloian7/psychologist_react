import { NavLink } from 'react-router-dom';
import '../servicee/Service.css';

const Service = () => {
    return(
        <div className="service"  id='Service'>
        <div className="service_bloc _container">
            <h2 className="service_title">
                Услуги
            </h2>
            <div className="service_content">
                <div className="service_inform block__button" >
                        <div className="service_title_inform">
                            Сессия
                        </div>
                        <p className="service_text _serv_text">≈ 1,5 часа</p>
                        <p className="service_price">50 €</p>
                        <div className="service__block__button _block__button service__button">
                                <NavLink to="/form" data-modal >
                                    <div className="text_button">Записаться</div>                                  
                                </NavLink>
                        </div>
                </div>
                <div className="service_inform block__button">
                        <div className="service_title_inform">
                            Чат с психологом
                        </div>
                        <p className="service_text">1 неделя <br/>
                            (30 мин. в день)</p>
                        <p className="service_price">70 €</p>
                        <div className="service__block__button _block__button service__button">
                                <NavLink to="/form" data-modal >
                                    <div className="text_button">Записаться</div>                                 
                                </NavLink>
                        </div>
                </div>
                <div className="service_inform block__button">
                    <div className="service_title_inform">
                        Интенсивная
                        проработка
                    </div>
                    <p className="service_text">
                        Личные консультации раз в неделю 
                        в течение 1 месяца. Практики, задания, 
                        на связи в течение рабочего дня. 
                    </p>
                    <p className="service_price">350 €</p>

                        <div className="service__block__button _block__button service__button">
                                <NavLink to="/form" data-modal >            
                                    <div className="text_button">Записаться</div>                                                         
                                </NavLink>
                        </div>
                    
                </div>
            </div>
            <div className='important'>
                *Важно! Запись в директе или здесь. Дата и время закрепляется после оплаты.
            </div>
        </div>
</div>
    )

}

export default Service;