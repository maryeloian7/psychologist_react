import React, {useState, useEffect, useRef} from 'react'

import Group from '../../resources/img/Group 1.svg';
import '../cases/Cases.css'

const Cases6 = () => {
    const [toggle, setToggle] = useState(false)
    const [heightEl, setHeightEl] = useState();

    const refHeight = useRef()

    useEffect(() => {
        setHeightEl(`${refHeight.current.scrollHeight}px`)
    }, [])

    return (
        <div className="cases_bloc block">
            <div 
            onClick={()=>setToggle(!toggle)}
            className="cases_item _item">
                <span>Все женщины - конкурентки?</span>
                <img className="cross" src={Group} alt=""/>
            </div>
            <div 
            className={toggle ? "accordion__body animated" : "accordion__body "}
            style={{height: toggle ? `${heightEl}` : "0px"}}
            ref={refHeight}
            >
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Запрос:</span><br/>У клиентки не складываются отношения с женщинами. Видит в каждой второй врага, опасность, зависть.
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Как работаем?</span> <br/>В работе находим ситуацию, где девушку совсем маленькую оставили надолго в другом городе. Большая обида на маму. Конечно, клиентка плачет, маму прощает, уходит напряжение в общении с окружающими женщинами. 
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Сколько работали? </span><br/>2 консультации.  
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Результат:</span><br/> Мир становится более приветливый в ответ. Меняется отношение к женщинам.
                </p>
                
            </div>          
        </div>
    )
}

export default Cases6;