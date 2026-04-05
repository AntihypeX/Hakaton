import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();
    return (
        <button className="back" onClick={() => navigate('/')}>
            Назад
        </button>
    );
}

function Chat() {
    return (
            <div className="container">
                <div className="sidebar">
                    <BackButton />
                    
                    <h1>Ваши чаты</h1>
                    <button type="submit" className="chat active">Название чата 1</button>
                    <button type="submit" className="chat">Название чата 2</button>
                </div>
                
                <div className="workspace">
                    <div className="messages">

                        <div className="AI-message">
                            <p>Чтобы я смог найти тебе работу, ответь, пожалуйста, на мои вопросы. Это поможет мне сформировать точный запрос и подобрать вакансии под твои критерии</p>
                        </div>
                        <div className="AI-message">
                            <p>Личные данные: ФИО, пол и возраст</p>
                        </div>
                        <div className="AI-message">
                            <p>Профиль: Твой возраст, город и желаемый формат (удаленка/офис)</p>
                        </div>
                        <div className="AI-message">
                            <p>База: Образование и ключевые профессиональные навыки (стек технологий, софт)</p>
                        </div>
                        <div className="AI-message">
                            <p>Опыт: Где работал раньше или какие проекты (даже личные) реализовывал?</p>
                        </div>
                        <div className="AI-message">
                            <p>Цели: На какую должность и зарплату претендуешь?</p>
                        </div>
                        <div className="AI-message">
                            <p>Дополнительно: Твои сильные стороны (soft skills) и хобби</p>
                        </div>

                    </div>
                    <div className="input">
                        <textarea name="message" id="message" className="message"></textarea>
                        <button type="submit">Отправить</button>
                    </div>
                </div>
            </div>
    );
}

export default Chat;