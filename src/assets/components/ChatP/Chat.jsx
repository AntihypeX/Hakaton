import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../data/api"; // проверь путь к api.js на сервере

function BackButton() {
    const navigate = useNavigate();
    return (
        <button className="back" onClick={() => navigate('/')}>
            Назад
        </button>
    );
}

function Chat() {
    const [chats, setChats] = useState([]);
    const [activeChatId, setActiveChatId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [draft, setDraft] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        api.listChats()
            .then((data) => {
                const list = Array.isArray(data.chats) ? data.chats : [];
                setChats(list);
                if (list.length > 0) {
                    setActiveChatId(list[0].id);
                }
            })
            .catch(() => {
                setChats([]);
            });
    }, []);

    useEffect(() => {
        if (!activeChatId) {
            setMessages([]);
            return;
        }

        api.getChatMessages(activeChatId)
            .then((data) => {
                setMessages(Array.isArray(data.messages) ? data.messages : []);
            })
            .catch(() => {
                setMessages([]);
            });
    }, [activeChatId]);

    const handleSend = async (e) => {
        e.preventDefault();

        const text = draft.trim();
        if (!text || loading) return;

        const localUser = {
            id: Date.now(),
            role: "user",
            content: text,
        };

        setMessages((prev) => [...prev, localUser]);
        setDraft("");
        setLoading(true);

        try {
            const data = await api.sendChatMessage(activeChatId || 0, text);

            const aiMsg = {
                id: Date.now() + 1,
                role: "assistant",
                content: data.reply || "ИИ не вернул ответ.",
            };

            setMessages((prev) => [...prev, aiMsg]);

            if (!activeChatId && data.chat_id) {
                setActiveChatId(data.chat_id);
                const refreshed = await api.listChats();
                setChats(Array.isArray(refreshed.chats) ? refreshed.chats : []);
            }
        } catch (err) {
            setMessages((prev) => [
                ...prev,
                { id: Date.now() + 2, role: "assistant", content: "Ошибка ответа ИИ." },
            ]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="sidebar">
                <BackButton />

                <h1>Ваши чаты</h1>
                {chats.map((chat) => {
                    const isActive = chat.id === activeChatId;
                    return (
                        <button
                            key={chat.id}
                            type="button"
                            className={`chat ${isActive ? "active" : ""}`}
                            onClick={() => setActiveChatId(chat.id)}
                        >
                            Чат {chat.number || chat.id}
                        </button>
                    );
                })}
            </div>

            <div className="workspace">
                <div className="messages">
                    <div className="AI-message">
                            <p>Чтобы я смог найти тебе работу, ответь, пожалуйста, на мои вопросы. Это поможет мне сформировать точный запрос и подобрать вакансии под твои критерии</p>
                        </div>
                        <div className="AI-message">
                            <p>Личные данные: ФИО, пол и возраст</p>
                        </div>
                        <div className="AI-message">
                            <p>Профиль: Твой возраст, город и желаемый формат (удаленка/офис)</p>
                        </div>
                        <div className="AI-message">
                            <p>База: Образование и ключевые профессиональные навыки (стек технологий, софт)</p>
                        </div>
                        <div className="AI-message">
                            <p>Опыт: Где работал раньше или какие проекты (даже личные) реализовывал?</p>
                        </div>
                        <div className="AI-message">
                            <p>Цели: На какую должность и зарплату претендуешь?</p>
                        </div>
                        <div className="AI-message">
                            <p>Дополнительно: Твои сильные стороны (soft skills) и хобби</p>
                        </div>
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={msg.role === "assistant" ? "AI-message" : "user-message"}
                        >
                            <p>{msg.content}</p>
                        </div>
                    ))}
                </div>

                <form className="input" onSubmit={handleSend}>
                    <textarea
                        name="message"
                        id="message"
                        className="message"
                        value={draft}
                        onChange={(e) => setDraft(e.target.value)}
                        disabled={loading}
                    />
                    <button type="submit" disabled={loading}>
                        {loading ? "Отправка..." : "Отправить"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Chat;
