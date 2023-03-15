import React, {useState, useEffect, useRef} from 'react'

import Group from '../../resources/img/Group 1.svg';
import '../cases/Cases.css'

const Cases4 = () => {
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
                <span>Ребенок постоянно болеет!</span>
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
                    <span className="cases_titles">Запрос:</span><br/>  Ребенок 9 лет. Постоянно болеет. Не складываются отношения со сверстниками, постоянно впадает в состояние жертвы. 
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Как работаем?</span> <br/>В работе выходим на то, что у мамы был выкидыш, который не был оплакан. Также в подростковом возрасте мама сталкивалась с психологическим насилием со стороны родителей. Состояние мамы отразилось на ребенке.  
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Сколько работали? </span><br/>4 консультации.   
                </p>
                <p 
                className="cases_item_tit"
                aria-hidden={toggle ? "true" : "false"}>
                    <span className="cases_titles">Результат:</span><br/> Контакт с ребенком улучшился. Ребенок начал открываться, проговаривать сложные ситуации, частота болезней снижается. Продолжаем работу с мамой.
                </p>
                
            </div>          
        </div>
    )
}

export default Cases4;