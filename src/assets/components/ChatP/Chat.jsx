import { useNavigate  } from "react-router-dom";
function Chat() {
    function BackButton(){
        const toMainPage = useNavigate();
        return(
            <button onClick={() => toMainPage('/')}>Назад</button>
        )
    }
    return(
        <div>
            <BackButton />
            <h1>Чат</h1>
        </div>
    )
}
export default Chat;