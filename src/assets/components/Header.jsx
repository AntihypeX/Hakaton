/* eslint-disable react-hooks/set-state-in-effect */
import logotype from '../image/логотип 23 (1).png';
import { PersonCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/glav.css';
import ModalLogIn from './ModalWindows/ModalLogIn.jsx';
import ModalRegistr from './ModalWindows/ModalRegistration.jsx';
function Header() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isRegOpen, setIsRegOpen] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setIsAuth(true);
        }
    }, []);
    const handleProfileClick = () => {
        if (isAuth) {
            navigate('/user'); 
        } else {
            setIsLoginOpen(true);
        }
    };
    const openReg = () => {
        setIsLoginOpen(false);
        setIsRegOpen(true);
    };
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img src={logotype} alt="hakaton" className="logo-images" />
            </Link>
            <div className="nav-links">
                <a href='#section1'>Информация о сайте</a>
                <a href='#section2'>Отзывы</a>
                <a href='#section3'>Помощь</a>
            </div>
            <div className='userProfile'>
                <button className="profile-button" onClick={handleProfileClick}>
                    <PersonCircle />
                </button>
            </div>
            <ModalLogIn
                isOpen={isLoginOpen}
                onClose={() => setIsLoginOpen(false)}
                onSwitch={openReg}
                setIsAuth={setIsAuth} 
            />
            <ModalRegistr
                isOpen={isRegOpen}
                onClose={() => setIsRegOpen(false)}
                setIsAuth={setIsAuth} 
            />
        </header>
    );
}

export default Header;