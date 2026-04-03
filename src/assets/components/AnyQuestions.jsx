import { AiOutlineDown } from 'react-icons/ai'
import { faqs } from '../../data/faqs.js'
import { useState } from 'react'
function AnyQuestions({title}) {
const [Active, setActive] = useState(null);
const clickAccordion = (id) => {
        setActive(id === Active ? null : id);
        };
    return (
        <div className="question-block">
            <h2 className="question-title">{title}</h2>
                <div className="question-box">
                    {faqs.map((faq) => (
                        <div key = {faq.id} className="question-item" onClick={() => clickAccordion(faq.id)}>
                            <h3 className="question-question">{faq.question}</h3>
                                <AiOutlineDown 
  style={{ 
    transform: Active === faq.id ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'transform 0.3s ease' 
  }} 
/>
                            {Active === faq.id && (
                                <p className="question-answer">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
        </div>
    )
}
export default AnyQuestions;