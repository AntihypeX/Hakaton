import Header from '../assets/components/Header.jsx';
import Footer from '../assets/components/Footer.jsx';
import SloganBlock from '../assets/components/SloganBlock.jsx';
import WhyUs from '../assets/components/WhyUs.jsx';
import ReviewsBlock from '../assets/components/Reviews.jsx';
import  '../styles/glav.css';
import '../data/reviews.js';
function MainPage(){
    return(
        <div className='AllPage'> 
            <Header />
                <main>
                   <SloganBlock /> 
                   <WhyUs title="Почему именно мы?" />
                   <ReviewsBlock title="Отзывы" />
                </main>
            <Footer />
        </div>
    )
}
export default MainPage;