import React, {useState, useEffect, useRef} from 'react'

import Group from '../../resources/img/Group 1.svg';
import '../cases/Cases.css'

const Cases2 = () => {
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
                <span>Как разорвать отношения?</span>
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
                    <span className="cases_titles">Запрос:</span><br/> Клиент хочет уйти от партнера, но не хватает решительности, понимает, что отношения не здоровые, но ничего не может с собой сделать. Клиент успешная в работе, но чувствует себя полной неудачницей в отношениях.
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Как работаем?</span> <br/>В работе выходим на ситуацию, где у клиентки рано умер отец, взрослые скрывали, хотя она все поняла. Не простилась. Не чувствовала внутреннюю опору, безопасность. Проработали прощание с отцом, внутреннюю опору. 
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Сколько работали? </span><br/>3 консультации. 
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Результат:</span><br/> Клиентке удается завершить отношения и переключить внимание на себя. Чувство безопасности, комфорта, гордость.
                </p>
                
            </div>          
        </div>
    )
}

export default Cases2;