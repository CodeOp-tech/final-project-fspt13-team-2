import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import AppHomePage from './AppHomePage';
import AppQuotesPage from './AppQuotesPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppHomePage />} />
      <Route path="/:id" element={<AppQuotesPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
