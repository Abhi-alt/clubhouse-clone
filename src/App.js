import './App.css';
import Welcome from './pages/Welcome';
import PhoneConfirmation from './pages/PhoneConfirmation';
import PlanLayout from './pages/Layouts/PlanLayout';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Routes>
          <Route exact path="/" element={<Welcome />}/>
          <Route exact path="/invite" element={<PhoneConfirmation />}/>
          <Route exact path="/codeconfirm" element={<CodeConfirm />}/>
          <Route exact path="/allow_notification" element={<AllowNotification/>} />
        </Routes>
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
