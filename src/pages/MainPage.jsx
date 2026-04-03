import Header from '../assets/components/Header.jsx';
import Footer from '../assets/components/Footer.jsx';
import SloganBlock from '../assets/components/SloganBlock.jsx';
function MainPage(){
    return(
        <div className='AllPage'> 
            <Header />
                <main>
                   <SloganBlock /> 
                </main>
            <Footer />
        </div>
    )
}
export default MainPage;