import logotype from '../../image/logoo.png';
import { useState } from "react";
import  '../../../styles/glav.css';

function HeaderP(){
    const [isModalOpen, setIsModalOpen] = useState(false);
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
            <>
                <div className='userProfile'>
                    <button className="profile-button">
                        Зарегистрироваться/Войти
                    </button>
                </div>
            </>
            <ModalLogIn
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)} />
        </header>
    )
}
export default HeaderP;