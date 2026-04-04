import logotype from '../../image/logoo.png';
import  '../../../styles/glav.css';
function HeaderP(){
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
        </header>
    )
}
export default HeaderP;