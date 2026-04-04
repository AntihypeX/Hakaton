import logotype from '../image/логотип 23 (1).png';
import { useState } from "react";
import  '../../styles/glav.css';
import ModalLogIn from './ModalWindows/ModalLogIn.jsx';
import ModalRegistr from './ModalWindows/ModalRegistration.jsx';
function Header(){
const [isLoginOpen, setIsLoginOpen] = useState(false);
const [isRegOpen, setIsRegOpen] = useState(false);
const openReg =() =>{
    setIsLoginOpen(false);
    setIsRegOpen(true);
}
    return(
        <header className="header">
            <>
                <a href="/" className="logo-link">
                    <img src={logotype}
                        alt="hakaton"
                        className="logo-images"
                    />
                </a>
            </>
            <div> 
                <a href='#section1'>Информация о сайте</a>
                <a href='#section2'>Отзывы</a>
                <a href='#section3' >Помощь</a>
            </div>
            <>
                <div className='userProfile'>
                    <button className="profile-button" onClick = {() => setIsLoginOpen(true)}>
                        Войти
                    </button>
                </div>
            </>
             <ModalLogIn
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)} 
                onSwitch={openReg}/>

            <ModalRegistr
                isOpen={isRegOpen} 
                onClose={() => setIsRegOpen(false)} />
        </header>
        
    )
}
export default Header;