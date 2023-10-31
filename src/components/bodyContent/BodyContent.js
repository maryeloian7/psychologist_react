
import icn1 from '../../resources/img/icn1.png';
import icn2 from '../../resources/img/icn2.png';
import icn3 from '../../resources/img/icn3.png';
import '../bodyContent/BodyContent.css'


const BodyContent = () => {
    return(
        <div className="body_content" id='BodyContent'>
                    <div className="body_content_inform _container">
                        <h2 className="body_text">Направления<br/><span className="body_text_br">моей работы</span></h2>
                        <div className="body_inform">
                            <div className="body_bloc">
                            <img className="body_img" src={icn1} alt="Психосоматика"/>
                            <h3 className="body_title">Психосоматика</h3>
                            <p className="body_title_text">
                                Телесная терапия. Метод PSY2.0. Диагностика. Поиск ресурса и проработка внутреннего кризиса. Освобождение от боли и страха. Работа с симптомом через регрессию. Смена привычных шаблонов мышления. Поиск и устранение причины возникновения заболевания, а не симптомов. (Женские болезни, аллергия, проблемная кожа, псориаз, акне, лишний вес, апатия, стресс и тд) 
                            </p>
                            </div>
                            <div className="body_bloc">
                                <img className="body_img" src={icn2} alt="Психосоматика"/>
                                <h3 className="body_title">Коучинг</h3>
                                <p className="body_title2">(сертификат по международным стандартам ICTA)</p>
                                <p className="body_title_text">
                                    Нейрокоучинг. Финансовое мышление. Работа с самооценкой. Постановка целей. Баланс всех сфер жизни. Работа с ограничивающими установками. Освобождение от созависимых отношений. Якорение целей в будущем.
                                </p>
                            </div>
                            <div className="body_bloc">
                                <img className="body_img" src={icn3} alt="Психосоматика"/>
                                <h3 className="body_title">Клиническая психология</h3>
                                <p className="body_title_text">
                                    Работа с паническими атаками, посттравматическими расстройствами, онкобольными и их близкими, родителями особенных детей, фобиями, тревогами, хронической усталостью, семейными проблемами, расстройствами пищевого поведения и тд. 
                                </p>
                            </div>
        
                        </div>
                    </div>
                </div>
    )
}

export default BodyContent;