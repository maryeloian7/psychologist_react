import React, {useState, useEffect, useRef} from 'react'

import Group from '../../resources/img/Group 1.svg';
import '../cases/Cases.css'

const Cases3 = () => {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    })

    return (
        <div className="cases_bloc block">
            <div
            onClick={()=>setToggle(!toggle)}
            className="cases_item _item">
                <span>Как похудеть ?</span>
                <img className={toggle ? 'cross_activ' : 'cross' } src={Group} alt=""/>
            </div>
            <div 
            className={toggle ? "accordion__body animated" : "accordion__body "}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p 
                className="cases_item_tit _item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Запрос:</span><br/> Клиент не может похудеть. С подросткового возраста толстая, постоянные диеты, а худой никогда не была.  
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Как работаем?</span> <br/>В работе выходим на травму насилия. Работаем со старой установкой «Быть привлекательной небезопасно». 
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Сколько работали? </span><br/>5 консультаций. 
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Результат:</span><br/> Отеки начинают уходить. Вес снизился с 93 кг до 85 кг почти за 3 месяца после окончания работы.
                </p>
                
            </div>          
        </div>
    )
}

export default Cases3;