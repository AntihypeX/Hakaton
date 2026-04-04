import { useRef } from 'react';
import { rev } from '../../data/reviews.js'
function ReviewsBlock({title}){
    const scrollRef = useRef(null)
    return(
        <div className="review-container">
            <h2 className="review-title">{title}</h2>
            <div className="rev-wrapper" ref={scrollRef}>
                <ul className="revUl">
                    {rev.map((rev) => (
                        <li key = {rev.id} className="rev-item">
                            <div className="prof-pic">
                                <img src={rev.profpic} alt={rev.name} />
                                <h4 className='user-name'>{rev.name}</h4>
                            </div>
                            <div className="song-info"> 
                                <p className='user-text'>{rev.text}</p>
                                <h5 className='date-review'>{rev.date}</h5>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default ReviewsBlock;