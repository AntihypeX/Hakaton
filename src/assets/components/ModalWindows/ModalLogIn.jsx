function ModalLogIn({ isOpen, onClose, onSwitch }) {
    if(!isOpen) return null;
return(
        <div className="modal-login-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-login-container-items">
                <div className="modal-login-title">
                    <h2>Авторизация</h2>
                </div>
                <div className="modal-login-form">
                    <form className="login-form" method="post">
                        <input type="text" placeholder="Логин" id="login" name="login"/>
                        <input type="password" placeholder="Пароль" id="password" name="password"/>
                        <button type="submit" id="login-button" className="btn-log">Войти</button>
                        <p>Нет аккаунта?</p> 
                        <span onClick={onSwitch}>Зарегистрируйтесь</span>
                    </form>
                </div>
                <button onClick={onClose} className="close-btn-log">Закрыть</button>
            </div>
        </div>
    )
}
export default ModalLogIn;