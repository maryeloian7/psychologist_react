import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

import './WhyMe.css'

const WhyMe = () => {
    
    const [number, setNumber] = useState(1);

    const props = useSpring({
        number,
        from: { number: 1 },
        to: async (next) => {
          for (let i = 1000; i <= 1000; i++) {
            await next({ number: i });
          }
        },
        config: { duration: 2000 }, // Уменьшаем продолжительность анимации
      });

  useEffect(() => {
    const timer = setInterval(() => {
      if (number < 1000) {
        setNumber(number + 1);
      }
    }, 10); // Уменьшаем интервал для более быстрой анимации

    return () => {
      clearInterval(timer);
    };
  }, [number]);


    return(
        <div  className="why_me">
        <div className="why_me_inform _container">
            <h2 className="why_me_title">
                Почему я ?
            </h2>
            <div className="why_me_bloc">
                <div className="why_me_numbers">
                    <div className="why_me_num"><animated.span>{props.number.interpolate((val) => Math.floor(val))}</animated.span></div>
                    <p className="why_me_kind">консультаций</p>
                    <p className="why_me_text">
                        Мои клиенты 
                        рекомендуют меня своим близким 
                        и друзьям. Я консультирую бизнесменов, психологов.
                    </p>
                </div>
                <div className="why_me_numbers">
                    <div className="why_me_num"> 15</div>
                    <p className="why_me_kind">инструментов</p>
                    <p className="why_me_text">
                        Владею широким инструментарием 
                        от клинической классической психологии до прогрессивных направлений.
                        Работаю с метафорическими картами, расстановками.
             
                    </p>
                </div>
                <div className="why_me_numbers">
                    <div className="why_me_num"> 200</div>
                    <p className="why_me_kind">клиентов решили запрос</p>
                    <p className="why_me_text">
                        Психосоматические симптомы (высыпания, псориаз, лишний вез)заметно уменьшаются в среднем через 4 консультации.


                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WhyMe;