function ModalReview({ isOpen, onClose }) {
    if(!isOpen) return null;
return(
   <div className="modal-review">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Оставить отзыв</h2>
                <form className="review-form" action="" method="post">
                    <div className="textarea">
                        <textarea placeholder="Ваш отзыв" id="message" name="message"></textarea>
                    </div>
                    <div className="button">
                        <button onClick={onClose} className="close-btn">Закрыть</button>
                        <button type="submit" className="submit-btn">Отправить</button>
                    </div>
                </form>
            </div>
   </div>
    )
}
export default ModalReview;
