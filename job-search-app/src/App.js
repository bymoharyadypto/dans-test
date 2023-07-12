import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import JobPages from './pages/JobPages';
import LoginPage from './pages/LoginPage';
export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/sign-in" element={<LoginPage />} />
        <Route element={<ProtectedRoute redirectPath={'/sign-in'} />}>
          <Route path="/jobs" element={<JobPages />} />
        </Route>
      </Routes>
    </>
  );
}
