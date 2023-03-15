import '../footer/Footer.css';

const Footer = () => {
    return(
        <div  className="_container">
        <h2 className="footer_title">Контакты</h2>
        <div className="footer__contacts contacts-footer">
            <a href="tel:+375293399703" className="contacts-footer__item contacts-footer__item__phone">+375 29 339-97-03</a>
            <a href="https://www.instagram.com/anna_ilaryevna/?igshid=YmMyMTA2M2Y%3D" className="contacts-footer__item contacts-footer__item__ins">@anna_ilaryevna</a>
            <a href="https://www.tiktok.com/@annailaryevna?_t=8aOK9vAwCes&_r=1" className="contacts-footer__item contacts-footer__item__w">@annailaryevna</a>
        </div>
    </div>
    )
}

export default Footer;
