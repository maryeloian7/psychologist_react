import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../modal/Modal.css';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_u4t7jhl'
const TEMPLATE_ID = 'template_erovd3p'
const PUBLIC_KEY = 'RUn1uUF2N-_fknQNx'

const Modal = () => {
    const [formValues, setFormValues] = useState({})
    const form = useRef()
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
    return(
        <div className="modal">
        <div className="modal__dialog">
            <div className="modal__content">
                <form action="#" ref={form} onSubmit={sendEmail}>
                    <Link to="/" data-modal >
                        <div  className="modal__close">&times;</div>
                    </Link>
                    <div className="modal__title">
                        Если вы хотите записаться, заполните форму обратной связи, и мы подберем удобное для вас время.
                    </div>
                    <input required placeholder="Ваше имя" name="name" type="text" className="modal__input" onChange={(e)=>{setFormValues({...formValues, name: e.target.value})}}/>
                    <input required placeholder="Откуда вы?" name="from" type="Where are you from?" className="modal__input" onChange={(e)=>{setFormValues({...formValues, from: e.target.value})}}/>
                    <input required placeholder="Номер телефона и удобный мессенджер" name="contacts" type="phone" className="modal__input" onChange={(e)=>{setFormValues({...formValues, contacts: e.target.value})}}/>
                    <select className="modal__input  option__input" name="time" required  onChange={(e)=>{setFormValues({...formValues, user_profile: e.target.value})}}>
                        <option  value="">Желаемое время консультации</option>
                        <option value="9:00 до 12:00">c 9:00 до 12:00</option>
                        <option value="12:00 до 16:00">c 12:00 до 16:00</option>
                        <option value="16:00 до 19:00">c 16:00 до 19:00</option>
                      </select>
                    <textarea required placeholder="Кратко опишите свой запрос" name="request" type="your request" className="modal__input __textarea_request" onChange={(e)=>{setFormValues({...formValues, request: e.target.value})}}></textarea>
                    <button type="submit" className="btn btn_dark btn_min">Отправить</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Modal;