import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

import './WhyMe.css'

const WhyMe = () => {

  const [isVisible, setIsVisible] = useState(false);

  const whyMeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(whyMeRef.current);
        }
      });
    });
  
    if (whyMeRef.current) {
      observer.observe(whyMeRef.current);
    }
  
    return () => {
      if (whyMeRef.current) {
        observer.unobserve(whyMeRef.current);
      }
    };
  }, []);

    const animatedProps1 = useSpring({
      number: isVisible ? 1000 : 1,
      from: { number: 1 },
      config: { duration: 2700 },
    });

      const animatedProps2 = useSpring({
        number: isVisible ? 15 : 1,
        from: { number: 1 },
        config: { duration: 2700 }, 
      });
    
      const animatedProps3 = useSpring({
        number: isVisible ? 200 : 1,
        from: { number: 1 },
        config: { duration: 2700 }, 
      });


    return(
        <div  className="why_me" >
        <div className="why_me_inform _container">
            <h2 className="why_me_title" ref={whyMeRef}>
                Почему я ?
            </h2>
            <div className="why_me_bloc">
                <div className="why_me_numbers">
                    <div className="why_me_num">><animated.span>{animatedProps1.number.interpolate((val) => Math.floor(val))}</animated.span></div>
                    <p className="why_me_kind">консультаций</p>
                    <p className="why_me_text">
                        Мои клиенты 
                        рекомендуют меня своим близким 
                        и друзьям. Я консультирую бизнесменов, психологов.
                    </p>
                </div>
                <div className="why_me_numbers">
                    <div className="why_me_num"> ><animated.span>{animatedProps2.number.interpolate((val) => Math.floor(val))}</animated.span></div>
                    <p className="why_me_kind">инструментов</p>
                    <p className="why_me_text">
                        Владею широким инструментарием 
                        от клинической классической психологии до прогрессивных направлений.
                        Работаю с метафорическими картами, расстановками.
             
                    </p>
                </div>
                <div className="why_me_numbers">
                    <div className="why_me_num"> ><animated.span>{animatedProps3.number.interpolate((val) => Math.floor(val))}</animated.span></div>
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