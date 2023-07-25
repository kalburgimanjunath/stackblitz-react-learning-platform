import * as React from 'react';
import { Header, Footer, Banner } from './components';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SocialShare } from './pages/learning/socialshare/index';
import Platform from './platform/';
export default function App() {
  return (
    <div>
      <Router>
        {/* <Header /> */}
        {/* <Banner /> */}

        <Routes>
          <Route exact path={`/`} element={<SocialShare />}></Route>
          <Route path={`/platform`} element={<Platform />}></Route>
        </Routes>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}
