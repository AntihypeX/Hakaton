import logotype from '../../image/logoo.png';
import { PersonCircle } from 'react-bootstrap-icons';
import { useState } from "react";
import  '../../../styles/glav.css';
import ModalLogIn from '../ModalWindows/ModalLogIn.jsx';
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
                    <button className="profile-button" onClick={() => setIsLoginOpen(true)}>
                        <PersonCircle />
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