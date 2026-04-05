import { toast } from 'react-toastify';
import api from '../../../data/api.js';
function ModalRegistr({ isOpen, onClose, setIsAuth }) {
    if (!isOpen) return null;
    const handleRegister = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const login = formData.get('login');
        const password = formData.get('password');
        const password2 = formData.get('password2');

        try {
            await api.register(login, password, password2);
            localStorage.setItem('user', 'true');
            toast.success("Вы успешно зарегистрировались!");

            if (setIsAuth) setIsAuth(true);
            onClose();
        } catch (error) {

            toast.error(error.message || "Ошибка при регистрации");
        }
    };
    return (
        <div className="modal-registr-container" onClick={onClose}>
            <div className="modal-registr-container-items" onClick={(e) => e.stopPropagation()}>
                <div className="modal-registr-title">
                    <h2>Регистрация</h2>
                </div>
                <div className="modal-regisre-form">
                    <form className="registr-form" onSubmit={handleRegister}>
                        <input
                            type="text"
                            placeholder="Логин"
                            name="login"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Повторите пароль"
                            name="password2"
                            required
                        />
                        <button type="submit" className="btn-log">Зарегистрироваться</button>
                    </form>
                </div>
                <button onClick={onClose} className="close-btn-log">Закрыть</button>
            </div>
        </div>
    );
}
export default ModalRegistr;