import React from 'react';
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to='/'>Home</Link> | <Link to='/akash'>Akash</Link> |{' '}
        <Link to='/rajeev'>Rajeev</Link>
      </nav>
    </div>
  );
};

export default Home;
