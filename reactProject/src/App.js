
import './App.css';
import ReservationMain from './pages/reservation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/reservation'} element={<ReservationMain/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
