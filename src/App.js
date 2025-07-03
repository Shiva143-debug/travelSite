import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Plans from './components/Plans';
import Cost from './components/Cost';
import Terms from './components/Terms';
import ContactUs from './components/contactUs'

import './App.css';
import Payment from './components/Payment';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/cost" element={<Cost />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </BrowserRouter>
);

export default App;
