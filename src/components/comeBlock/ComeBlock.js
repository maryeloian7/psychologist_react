import come from '../../resources/img/comee.png';
import '../comeBlock/ComeBlock.css';

const ComeBlock = () => {
    return(
        <div className="come ">
        <div className="come_bloc _container">
            <p className="come_text">
                Можно купить новое платье, сумку, косметику, 
                но работа<br/> в терапии украсит тебя в миллион раз ярче, поможет проявиться, расслабиться.
                <br/>Приходи💫
            </p>
            <div className="come_bac">
                <img className="come_img" src={come} alt=""/>
            </div>  
        </div>
    </div>
    )
}

export default ComeBlock;