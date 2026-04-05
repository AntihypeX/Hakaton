function WhyUs({title}){
    return(
        <main className="why-block" id='section1'>
            <h2 className="why-title">{title}</h2>
            <div className="why-cards"> 
                <div className="why-card">
                    <h4 className="why-card-title">Интеллект GigaChat</h4>
                    <p className="why-card-description">GigaChat глубоко анализирует ваши данные и находит скрытые связи между навыками, открывая перспективные ниши, о которых вы даже не задумывались.</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Анализ «свободного текста»</h4>
                    <p className="why-card-description">Никаких бесконечных анкет. Просто расскажите о себе в предложенной форме — наш AI поймет контекст, опыт и амбиции из обычного сообщения.</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Персонализированный карьерный трек</h4>
                    <p className="why-card-description">Система выстраивает пошаговый план развития: какие навыки «прокачать», какие курсы пройти и на какие вакансии стоит претендовать уже сегодня.</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Объективность</h4>
                    <p className="why-card-description">Нейросеть оценивает только ваши реальные компетенции и потенциал. Это независимый взгляд со стороны, который помогает избавиться от «синдрома самозванца» и трезво оценить свою стоимость на рынке</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Мгновенный результат 24/7</h4>
                    <p className="why-card-description">Анализ доступен в любое время. В отличие от живых коучей, вы получаете детальный разбор и рекомендации в течение нескольких секунд.</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Конфиденциальность</h4>
                    <p className="why-card-description">Безопасное пространство для рефлексии. Данные используются только для персональных советов, позволяя вам честно описывать свои цели и страхи.</p>
                </div>
            </div> 
        </main>
    )
}
export default WhyUs;