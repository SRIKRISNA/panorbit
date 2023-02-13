import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComingSoon from './components/ComingSoon';
import LandingPage from './components/LandingPage.js';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<LandingPage />}></Route>
          <Route path='/profile/:id' element={<Profile />}></Route>
          <Route path='/comingsoon' element={<ComingSoon />}></Route>

        </Routes>
      </BrowserRouter>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
