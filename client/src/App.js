import './styles.css';
import { Routes, Route } from 'react-router-dom';
import ProfilePage from './routes/profilePage';
import LoginPage from './routes/loginPage';
import HomePage from './routes/homePage';
import TestPage from './routes/testPage';
import AddWordsPage from './routes/addWordsPage';
import RegistrationPage from './routes/registrationPage';
import PrivateRoute from "./hocs/PrivateRoute";

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/profile" element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
          }
        />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/add_words" element={<AddWordsPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
