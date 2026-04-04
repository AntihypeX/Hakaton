import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import UserPage from "./pages/UserPage"; 
import ProtectedRoute from "./ProtectedRoute";
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/Hakaton"> 
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/user" element={
          <ProtectedRoute>
            <UserPage />
          </ProtectedRoute>
        } />
        <Route path="*" element={<div><h2>404</h2><a href="/">Домой</a></div>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;