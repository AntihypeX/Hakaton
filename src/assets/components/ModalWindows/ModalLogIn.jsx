import {toast} from 'react-toastify';
import '/api.js'
function ModalLogIn({ isOpen, onClose, onSwitch, setIsAuth }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', 'true');
        if (setIsAuth) { 
            setIsAuth(true); 
        }
        toast.success('Вы успешно вошли!');
        onClose(); 
    };
    if (!isOpen) return null;
    return (
        <div className="modal-login-container" onClick={onClose}>
            <div className="modal-login-container-items" onClick={(e) => e.stopPropagation()}>
                <div className="modal-login-title">
                    <h2>Авторизация</h2>
                </div>
                <div className="modal-login-form">
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input type="text" placeholder="Логин" id="login" name="login" required />
                        <input type="password" placeholder="Пароль" id="password" name="password" required />
                        <button type="submit" id="login-button" className="btn-log">
                            Войти
                        </button>
                        <p>Нет аккаунта?</p> 
                        <span onClick={onSwitch} style={{ cursor: 'pointer', color: 'blue' }}>
                            Зарегистрируйтесь
                        </span>
                    </form>
                </div>
                <button onClick={onClose} className="close-btn-log">Закрыть</button>
            </div>
        </div>
    );
}
export default ModalLogIn;