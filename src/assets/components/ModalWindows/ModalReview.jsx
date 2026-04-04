function ModalReview({ isOpen, onClose }) {
    if(!isOpen) return null;
return(
   <div className="modal-review">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Оставить отзыв</h2>
                <form className="review-form" action="" method="post">
                    <input type="text" placeholder="Ваше имя" id="name" name="name"/>
                        <textarea placeholder="Ваш отзыв" id="message" name="message"></textarea>
                    <button type="submit">Отправить</button>
                </form>
                <button onClick={onClose} className="close-btn">Закрыть</button>
            </div>
   </div>
    )
}
export default ModalReview;
