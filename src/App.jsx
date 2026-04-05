import MainPage from "./pages/MainPage";
import ChatPage from "./pages/ChatPage";
import UserPage from "./pages/UserPage"; 
import ProtectedRoute from "./ProtectedRoute";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <BrowserRouter basename="/Hakaton"> 
    <ToastContainer position="top-right" autoClose={3000} />
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