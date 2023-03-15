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
import UsersRegisterPage from './UsersRegisterPage';
import CommentCreationPage from './CommentCreationPage';
import { Theme } from 'react-daisyui';
import CommentsPage from './CommentsPage';

function App() {
  return (
    <div className="container mx-auto p-8 m-10 bg-none">
      <Theme dataTheme="bumblebee">

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<CommentsPage />} />
      <Route path="/add" element={<CommentCreationPage />} />
      <Route path="/register" element={<UsersRegisterPage />} />
      <Route path="/login" element={<UsersLoginPage />} />
      <Route path="/private" element={
      <PrivateRoute>
        <UsersPrivatePage />
      </PrivateRoute>
      } />
    </Routes>
    </BrowserRouter>

    </Theme>
    </div>
  );
}

export default App;
