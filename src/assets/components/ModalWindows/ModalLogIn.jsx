import {toast} from 'react-toastify';
import api from '../../../data/api.js'
function ModalLogIn({ isOpen, onClose, onSwitch, setIsAuth }) {
    if (!isOpen) return null;
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const login = formData.get('login');
        const password = formData.get('password');

        try {
            // Вызываем метод из твоего api.js
            await api.login(login, password);
            
            localStorage.setItem('user', 'true');
            if (setIsAuth) setIsAuth(true);
            
            toast.success('Вы успешно вошли!');
            onClose(); 
        } catch (error) {
            // Твой api.js пробрасывает ошибки с message
            toast.error(error.message || 'Ошибка авторизации');
        }
    };
    const handleSwitch = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onSwitch) {
        onSwitch(); 
    }
};
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
                        <span onClick={handleSwitch} style={{ cursor: 'pointer', color: 'blue' }}>
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