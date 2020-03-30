import React from 'react';

import NavBar from '../components/Navbar';
import Sidenav from '../components/sidenav';
import Maincontent from '../components/main';
import Footer from '../components/footer';

const Home = props => {
  return (
    <>
      <NavBar />
      <div className="main">
        <Sidenav />
        <Maincontent />
      </div>
      <Footer />
    </>
  );
};
export default Home;
