function UserBlock(){
    const user = {
            name: 'name',
            email: 'Почта',
            avatar: "https://i.pravatar.cc/150?u=9",
            password: '123'

        };

    const requests = [
        'Запрос 1',
        'Запрос 2',
        'Запрос 3'
    ];
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.href = '/';    
    }
    return(
        <div className="userfon">
            <div className="userBlock">
                <h2 className="user-title"> Настройка аккаунта </h2>
                    <div className="user-settings">
                        <div className="user-container">
                            <div className="avatar-circle">
                                {user.avatar && <img src={user.avatar} alt={user.name} />}
                            </div>
                            <span className="avatar-change">Сменить аватар</span> 
                        </div>
                        <div className="info-area">
                            <div className="info-row">
                                <div>
                                    <span className="info-label">Имя:</span>
                                    <span className="info-value">{user.name}</span>
                                </div>
                                <button className="edit-button">Изменить</button>
                            </div>
                            <div className="info-row">
                                <div>
                                    <span className="info-label">Почта:</span>
                                    <span className="info-value">{user.email}</span>
                                </div>
                                <button className="edit-button">Изменить</button>
                            </div>
                            <div className="info-row">
                                <div>
                                    <span className="info-label">Пароль:</span>
                                    <span className="info-value">{user.password}</span>
                                </div>
                                <button className="edit-button">Изменить</button>
                            </div>
                        </div>
                    </div>
                    <h2 className=""> Список запросов</h2>
                    <div className="request-list">
                        {requests.map((request, index) => (
                            <div key={index} className="request-item">
                                {request}
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        <button className="create-request-button">Создать запрос</button>  
                        <button className="logout-button" onClick={handleLogout}>Выход</button>
                    </div>
            </div>
        </div>
    )
}
export default UserBlock;