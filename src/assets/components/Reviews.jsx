import { useRef, useState } from 'react';
import { rev } from '../../data/reviews.js'
import  ModalReview  from '../components/ModalWindows/ModalReview.jsx'
function ReviewsBlock({title}){
    const scrollRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    return(
        <div className="review-container" id = 'section2'>
            <h2 className="review-title">{title}</h2>
            <div className="rev-wrapper" ref={scrollRef}>
                <ul className="revUl">
                    {rev.map((rev) => (
                        <li key = {rev.id} className="rev-item">
                            <div className="prof-pic">
                                <img src={rev.profpic} alt={rev.name} />
                            </div>
                            <div className="song-info"> 
                                <h4 className='user-name'>{rev.name}</h4>
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