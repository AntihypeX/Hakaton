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
                        <div className="user-message">
                            <p>Помоги с профессией</p>
                        </div>
                        <div className="AI-message">
                            <p>Конечно, перед этим ответьте на вопросы...</p>
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