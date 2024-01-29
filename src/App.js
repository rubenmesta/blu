import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Features from './components/Features';
import SectionContent from './components/Section';
import Specials from './components/Specials';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Menus from './Pages/Menus';
import PrivateDining from './Pages/PrivateDining';
import SpecialEvents from './Pages/SpecialEvents';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/menus" element={<Menus />} />
          <Route exact path="/private-dining" element={<PrivateDining />} />
          <Route exact path="special-events" element={<SpecialEvents />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
