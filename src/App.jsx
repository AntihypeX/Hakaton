import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="*" element={<MainPage />} />
          <Route path="*" element={<div>Упс! Страница не найдена. <a href="/">Вернуться домой</a></div>} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}
export default App;
