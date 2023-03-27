import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../modal/Modal.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_u4t7jhl'
const TEMPLATE_ID = 'template_erovd3p'
const PUBLIC_KEY = 'RUn1uUF2N-_fknQNx'

const Modal = () => {
    const [visibleContent, setVisibleContent] = useState('form');
    const form = useRef()

    const message = {
        success: 'Спасибо! Скоро с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setVisibleContent('success');
      }, (error) => {
          setVisibleContent('failure');
      });
  };
    return(
        <div className="modal">
        <div className="modal__dialog">
            <div className="modal__content">
                {visibleContent === 'form' && 
                    <form action="#" ref={form} onSubmit={sendEmail}>
                    <Link to="/" data-modal >
                        <div  className="modal__close">&times;</div>
                    </Link>
                    <div className="modal__title">
                        Если вы хотите записаться, заполните форму обратной связи, и мы подберем удобное для вас время.
                    </div>
                    <input required placeholder="Ваше имя" name="name" type="text" className="modal__input" />
                    <input required placeholder="Откуда вы?" name="from" type="Where are you from?" className="modal__input" />
                    <input required placeholder="Номер телефона и удобный мессенджер" name="contacts" type="phone" className="modal__input" />
                    <select className="modal__input  option__input" name="time" required  >
                        <option  value="">Желаемое время консультации</option>
                        <option value="9:00 до 12:00">c 9:00 до 12:00</option>
                        <option value="12:00 до 16:00">c 12:00 до 16:00</option>
                        <option value="16:00 до 19:00">c 16:00 до 19:00</option>
                        </select>
                    <textarea required placeholder="Кратко опишите свой запрос" name="request" type="your request" className="modal__input __textarea_request" ></textarea>
                    <button type="submit" className="btn btn_dark btn_min">Отправить</button>
                </form>
                }
                
            {visibleContent === 'success' && 
                <div>
                    <p className='thankYouModal'>Спасибо! Скоро с вами свяжемся</p>
                    <Link to="/" data-modal >
                    <button type="submit" className="btn btn_dark btn_min btn_thankYouModal">Вернуться на главную страницу</button>
                    </Link>
                </div>}
            {visibleContent === 'failure' && 
                            <div>
                            <p className='thankYouModal'>Что-то пошло не так...</p>
                                <button onClick={()=>{setVisibleContent('form')}} type="submit" className="btn btn_dark btn_min btn_thankYouModal">Вернуться к форме</button>
                        </div>}
            </div>
        </div>
    </div>
    )
}

export default Modal;