import { useNavigate } from "react-router-dom";
function Chat() {
    function BackButton() {
        const toMainPage = useNavigate();
        return (
            <button onClick={() => toMainPage('/')}>Назад</button>
        )
    }
    return (
        <div>
            <BackButton />
            <div className="container">
                <div className="sidebar">
                    <h1>Ваши чаты</h1>
                    <button type="submit" className="chat">Название чата 1</button>
                    <button type="submit" className="chat">Название чата 2</button>
                </div>
                <div className="workspace">
                    <div className="messages">
                        <div className="user-message">
                            <p>Помоги с профессией</p>
                        </div>
                        <div className="AI-message">Конечно, перед этим ответьте на вопросы..</div>
                    </div>
                    <div className="input">
                        <input type="text" name="message" id="message"></input>
                        <button type="submit">Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Chat;