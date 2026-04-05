import { toast } from 'react-toastify';
import api from '../../../data/api.js'
function ModalRegistr({ isOpen, onClose, onSwitch, setIsAuth }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
        await api.register({
            login: formData.get('login'), 
            password: formData.get('password'),
            password2: formData.get('password2')
        });

        localStorage.setItem('user', 'true');
        toast.success("Регистрация успешна!");
        if (setIsAuth) setIsAuth(true);
        onClose();
    } catch (error) {
        toast.error(error.message);
    }
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

export default ModalRegistr;