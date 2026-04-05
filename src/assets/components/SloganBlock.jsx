import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
function SloganBlock(){
    const navigate = useNavigate();
    const handleChat = () => {
        const user = localStorage.getItem('user');
        if (user) {
            navigate('/chat'); 
        }else{
            toast.error("Пожалуйста, войдите в аккаунт или зарегистрируйтесь!");
        }
    }
    return(
        <main className="main-block">
            <h1 className="slogan">Твой успех — наш приоритет: построим трек мечты!</h1>
            <h2 className="slogan-under"> Помогаем составить план, прокачать навыки и найти работу</h2>
            <button className="go-to-chath" onClick={handleChat}>Найти работу</button>
        </main>
    )
}
export default SloganBlock;