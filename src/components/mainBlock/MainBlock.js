import {  Link } from 'react-router-dom';
import ava from '../../resources/img/ava.jpeg';
import '../mainBlock/MainBlock.css';

const MainBlock = () => {
    return(
        <div className="main-block__container stacked-radial">  
        <div className="main-block  _container stacked-radials">
            <div className="foto">
                <img src={ava} alt="img" className="main-img"/>
            </div>
            <div className="main-text">
                <p className="text2">ПРИВЕТСТВУЮ ТЕБЯ!</p>
                <p className="text2 name">Меня зовут</p>
                <h1><span className="ls">Анна</span><br/><span className="surname">Иларьевна</span></h1>
                <p className="text3">Я практикующий психолог,<br/>
                    специалист по психосоматике</p>
                <div className="_main__button_bloc">
                    <div className="main__button _main__button">
                        <Link to="/form" data-modal >
                            <div className="main__block__button _block__button">
                                <div className="text_button">Записаться</div>
                            </div>                   
                        </Link>
                    </div>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default MainBlock;