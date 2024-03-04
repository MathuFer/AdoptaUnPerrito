import React from 'react';

const Header = ({ title }) => {
    return (
      <header style={{color: '#000', padding: '1rem 0', textAlign: 'center'}}>
        <h1>{title}</h1>
      </header>
    );
  }

export default Header;

