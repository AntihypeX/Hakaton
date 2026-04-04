function WhyUs({title}){
    return(
        <main className="why-block">
            <div className="why-description">
                <h2 className="why-title">{title}</h2>
                <h3 className="why-description">Мы не просто сайт с вакансиями — мы ваш персональный навигатор в мире карьеры.</h3>
            </div>   
            <div className="why-cards"> 
                <div className="why-card">
                    <h4 className="why-card-title">Интеллект на базе DeepSeek</h4>
                    <p className="why-card-description">Мы используем передовые алгоритмы DeepSeek для глубокого анализа ваших данных. Нейросеть видит скрытые связи между вашими навыками и находит те профессиональные ниши, о которых вы даже не задумывались</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Анализ «свободного текста»</h4>
                    <p className="why-card-description">Вам не нужно заполнять бесконечные анкеты и ставить галочки. Просто расскажите о себе в свободной форме — как на интервью. Наш AI поймет контекст, опыт и даже ваши амбиции из обычного сообщения</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Персонализированный карьерный трек</h4>
                    <p className="why-card-description">На основе анализа ваших компетенций система выстраивает пошаговый план развития: какие навыки стоит «прокачать», какие курсы пройти и на какие вакансии стоит претендовать уже сегодня</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Объективность</h4>
                    <p className="why-card-description">Нейросеть оценивает только ваши реальные компетенции и потенциал. Это независимый взгляд со стороны, который помогает избавиться от «синдрома самозванца» и трезво оценить свою стоимость на рынке</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Мгновенный результат 24/7</h4>
                    <p className="why-card-description">В отличие от консультаций с карьерными коучами, анализ доступен в любое время. Вы получаете детальный разбор и рекомендации в течение нескольких секунд после отправки запроса</p>
                </div>
                <div className="why-card">
                    <h4 className="why-card-title">Конфиденциальность и фокусовок</h4>
                    <p className="why-card-description">Ваши данные используются только для генерации персональных советов. Мы создаем безопасное пространство для рефлексии, где вы можете честно описать свои желания и страхи, чтобы получить максимально точный вектор развития</p>
                </div>
            </div> 
        </main>
    )
}
export default WhyUs;