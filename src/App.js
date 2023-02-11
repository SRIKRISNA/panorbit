import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Demo from './components/demo';
import LandingPage from './components/LandingPage.js';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<LandingPage />}></Route>
          <Route index path='/profile/:id' element={<Profile />}></Route>

        </Routes>
      </BrowserRouter>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
