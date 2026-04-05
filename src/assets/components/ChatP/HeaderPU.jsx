/* eslint-disable react-hooks/set-state-in-effect */
import logotype from '../../image/логотип 23 (1).png';
import { PersonCircle } from 'react-bootstrap-icons';
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/glav.css';
function Header() {
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
        }
    };
    return (
        <header className="header">
            <Link to="/" className="logo-link">
                <img src={logotype} alt="hakaton" className="logo-images" />
            </Link>
            <div className='userProfile'>
                <button className="profile-button" onClick={handleProfileClick}>
                    <PersonCircle />
                </button>
            </div>
        </header>
    );
}

export default Header;