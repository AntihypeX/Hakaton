import logotype from '../components/image/logoo.png';
function Header(){

    return(
        <header className="header">
            <>
                <a href="/" className="logo-link">
                    <img src={logotype}
                        alt=""
                        className="logo-images"
                    />
                </a>
            </>
            <div> 
                <button className='information-about'>
                    <p>Информация о сайте</p>
                </button>
            </div>
        </header>
    )
}
export default Header;