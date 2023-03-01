import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import AppHomePage from './HomePage';
import UsersLoginPage from './UsersLoginPage';
import UsersProfilePage from './UsersProfilePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppHomePage />} />
      <Route path="/users" element={<UsersLoginPage />} />
      <Route path="/users/:id" element={<UsersProfilePage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
