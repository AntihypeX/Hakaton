import { Navigate } from 'react-router-dom';
const ProtectedRoute = ({ children }) => {
    const isAuth = localStorage.getItem('user'); 
    if (!isAuth) {
        return <Navigate to="/" replace />;
    }
    return children;
};
export default ProtectedRoute;