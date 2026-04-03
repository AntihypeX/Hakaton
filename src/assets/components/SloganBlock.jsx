import { useNavigate } from 'react-router-dom';
function SloganBlock(){
    const toChatPage = useNavigate();
    return(
        <main className="main-block">
            <h1 className="slogan">Слоган</h1>
            <h2 className="slogan-under">Буковки какие то</h2>
            <button className="go-to-chath" onClick={() => toChatPage('/chat')}>Зайти в чат</button>
        </main>
    )
}
export default SloganBlock;