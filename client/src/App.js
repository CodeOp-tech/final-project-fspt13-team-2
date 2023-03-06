import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './HomePage';
import UsersLoginPage from './UsersLoginPage';
import UsersPrivatePage from './UsersPrivatePage';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<UsersLoginPage />} />
      <Route path="/private" element={
      <PrivateRoute>
        <UsersPrivatePage />
      </PrivateRoute>
      } />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
