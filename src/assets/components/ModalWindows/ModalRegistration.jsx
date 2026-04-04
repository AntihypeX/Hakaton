function ModalRegistr({isOpen, onClose}){ 
    if(!isOpen) return null;
    return(
        <div className="modal-registr-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-registr-container-items">
                <div className="modal-registr-title">
                    <h2>Регистрация</h2>
                </div>
                <div className="modal-regisre-form">
                    <form className="registr-form" method="post">
                        <input type="text" placeholder="Имя" id="name" name="name"/>
                        <input type="email" placeholder="Почта" id="email" name="email"/>
                        <input type="password" placeholder="Пароль" id="password" name="password"/>
                        <input type="password" placeholder="Повторите пароль" id="password2" name="password2"/>
                        <input type="date" placeholder="Дата рождения" id="date" name="date"/>
                        <button type="submit" className="btn-log">Зарегистрироваться</button>
                    </form>
                </div>
                <button onClick={onClose} className="close-btn-log">Закрыть</button>
            </div>
        </div>
    )
}
export default ModalRegistr;