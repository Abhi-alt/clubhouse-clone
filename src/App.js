import './App.css';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import PlanLayout from './pages/Layouts/PlanLayout';
import AppLayout from './pages/Layouts/AppLayout';
import CodeConfirm from './pages/CodeConfirm';
import Home from './pages/Home';
import AllowNotification from './pages/AllowNotification';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {
  return (
    // <>
    <BrowserRouter>
    <PlanLayout>
      <Routes>
        <Route exact path="/" element={<Welcome />}/>
        <Route exact path="/invite" element={<PhoneConfirmation />}/>
        <Route exact path="/code_confirm" element={<CodeConfirm />}/>
        <Route exact path="/allow_notification" element={<AllowNotification/>} />
      </Routes>
    </PlanLayout>
    <AppLayout>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </AppLayout>
  </BrowserRouter>
  );
}

export default App;
