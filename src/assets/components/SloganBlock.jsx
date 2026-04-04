import { useNavigate } from 'react-router-dom';
function SloganBlock(){
    const toChatPage = useNavigate();
    return(
        <main className="main-block">
            <h1 className="slogan">Твой успех — наш приоритет: построим трек мечты!</h1>
            <h2 className="slogan-under">Мы поможем составить план, прокачать навыки и найти работу, которая вдохновляет.</h2>
            <button className="go-to-chath" onClick={() => toChatPage('/chat')}>Зайти в чат</button>
        </main>
    )
}
export default SloganBlock;