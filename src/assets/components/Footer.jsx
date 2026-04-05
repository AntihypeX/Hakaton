import {toast} from 'react-toastify';
import logotype from '../image/логотип 23 (1).png'
const Year = new Date().getFullYear();
function Footer(){
    const copyOnClick = (e) =>{
        const copy = e.target.innerText;
        navigator.clipboard.writeText(copy)
        .then(() => {
            toast.success('Скопировано в буфер обмена.');
        }).catch(err => {
            console.log(err);
        });
    }
    return(
        <footer className="footer">
            <div className="left-side">
                <a href="/" className="logo-link">
                    <img src={logotype}
                        alt="hakaton"
                        className="logo-images"
                    />
                </a>
                <h4 className="footer-text">© Ai-Карьера, {Year}</h4>
            </div>
            <div className="right-side">
                <div>
                    <h3 className='footer-text'>Оферта</h3>
                        <div className="footer-oferta">
                            <a className='footer-text'>Пользовательское соглашение</a>
                            <a className='footer-text'>Политика конфиденциальности</a>
                        </div>
                </div>
                <div>
                    <h3 className='footer-text'>Контакты</h3>
                        <div className='footer-contacts'>
                            <span className='footer-url' onClick={copyOnClick}>aicariera@ya.ru</span>
                            <span className='footer-url' onClick={copyOnClick}>+7 (999) 999-99-99</span>
                        </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;
