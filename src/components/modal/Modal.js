
import '../modal/Modal.css';


const Modal = () => {

    return(
        <div className="modal">
        <div className="modal__dialog">
            <div className="modal__content">
                <form action="#">
                    <div  className="modal__close">&times;</div>
                    <div className="modal__title">
                        Если вы хотите записаться, заполните форму обратной связи, и мы подберем удобное для вас время.
                    </div>
                    <input required placeholder="Ваше имя" name="name" type="text" className="modal__input"/>
                    <input required placeholder="Откуда вы?" name="from" type="Where are you from?" className="modal__input"/>
                    <input required placeholder="Номер телефона и удобный мессенджер" name="contacts" type="phone" className="modal__input"/>
                    <select className="modal__input  option__input" name="user_profile" required >
                        <option  value="">Желаемое время консультации</option>
                        <option value="9:00 до 12:00">c 9:00 до 12:00</option>
                        <option value="12:00 до 16:00">c 12:00 до 16:00</option>
                        <option value="16:00 до 19:00">c 16:00 до 19:00</option>
                      </select>
                    <textarea required placeholder="Кратко опишите свой запрос" name="request" type="your request" className="modal__input __textarea_request"></textarea>
                    <button className="btn btn_dark btn_min">Отправить</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Modal;