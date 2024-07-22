// import {BrowserRouter, Route, Switch} from 'react-router-dom'

// import Home from './components/Home'
// import Plans from './components/Plans'
// import Cost from './components/Cost'
// import Slidebar from './components/Slidebar'
// import Terms from './components/Terms'
// import contactUs from './components/contactUs'

// import './App.css'

// const App = () => (
//   <BrowserRouter>
//     <Slidebar />
//     <Switch>
//       <Route exact path="/" component={Home} />
//       <Route exact path="/plans" component={Plans} />
//       <Route exact path="/cost" component={Cost} />
//       <Route exact path="/terms" component={Terms} />
//       <Route exact path="/contactUs" component={contactUs} />
//     </Switch>
//   </BrowserRouter>
// )

// export default App

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import Plans from './components/Plans';
import Cost from './components/Cost';
import Slidebar from './components/Slidebar';
import Terms from './components/Terms';
import ContactUs from './components/contactUs'

import './App.css';

const App = () => (
  <BrowserRouter>
    <Slidebar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/cost" element={<Cost />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/contactUs" element={<ContactUs />} />
    </Routes>
  </BrowserRouter>
);

export default App;
