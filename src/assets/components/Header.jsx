import logotype from '../image/logoo.png';
import  '../../styles/glav.css';
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
                <a href='#section1'>Информация о сайте</a>
                <a href='#section2'>Отзывы</a>
                <a href='#section3' >Помощь</a>
            </div>
            <>
                <div className='userProfile'>
                    <button className="profile-button">
                        Войти
                    </button>
                </div>
            </>
        </header>
    )
}
export default Header;