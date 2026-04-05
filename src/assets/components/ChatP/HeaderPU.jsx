import logotype from '../../image/логотип 23 (1).png';
import { PersonCircle } from 'react-bootstrap-icons';
import  '../../../styles/glav.css';
import ModalLogIn from '../ModalWindows/ModalLogIn.jsx';
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
function HeaderPU(){
    const navigate = useNavigate();
    const [ isLoginOpen, setIsLoginOpen ] = useState(false);
    const handleProfileClick = () =>{
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/user');
        }else{
            setIsLoginOpen(true);
        }
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
            <>
                <div className='userProfile'>
                    <button className="profile-button" onClick={handleProfileClick}>
                       <PersonCircle />
                    </button>
                </div>
            </>
            <>
                <ModalLogIn 
                isOpen = {isLoginOpen}
                onClose = {() => setIsLoginOpen(false)}/>
            </>
        </header>
    )
}
export default HeaderPU;