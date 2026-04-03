import logotype from '../image/logoo.png';
import  '../../styles/glav.css';
import { PersonCircle } from 'react-bootstrap-icons';
function Header(){

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
                <button className='information'>
                    <p>Информация о сайте</p>
                </button>
                <button className='information'>
                    <p>О нас</p>
                </button>
                <button className='information'>
                    <p>Помощь</p>
                </button>
            </div>
            <>
                <div className='userProfile'>
                    <button className="profile-button">
                        <PersonCircle size={70}/>
                    </button>
                </div>
            </>
        </header>
    )
}
export default Header;