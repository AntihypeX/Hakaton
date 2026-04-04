import { useRef, useState} from 'react';
import { rev } from '../../data/reviews.js'
import  ModalReview  from '../components/ModalWindows/ModalReview.jsx'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
function ReviewsBlock({title}){
    const scrollRef = useRef(null)
    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left: -475, behavior: 'smooth'})
        }
    };
    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({left: 475, behavior: 'smooth'})
        }
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div className="review-container" id = 'section2'>
            <h2 className="review-title">{title}</h2>
            <div className="controls">
                    <button onClick={scrollLeft} className='scroll-button-l'>
                        <FaChevronCircleLeft />
                    </button>
                    <button onClick={scrollRight} className='scroll-button-r'>
                        <FaChevronCircleRight />
                    </button>
                </div>
            <div className="rev-wrapper" ref={scrollRef}>
                <ul className="revUl">
                    {rev.map((rev) => (
                        <li key = {rev.id} className="rev-item">
                            <div className="prof-pic">
                                <img src={rev.profpic} alt={rev.name} />
                                <h4 className='user-name'>{rev.name}</h4>
                            </div>
                            <div className="song-info"> 
                                <p className='user-text'>{rev.message}</p>
                                <h5 className='date-review'>{rev.date}</h5>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="my-review">
                    <button className="my-review-button" onClick = {() => setIsModalOpen(true)}>
                        Оставить отзыв
                    </button>
            </div>
            <ModalReview
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)} />
        </div>
    );
}
export default ReviewsBlock;