import React from 'react';

const layout = ({ children, title }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">{title}</div>
      </nav>
      <div className="container" style={{ padding: '1rem' }}>
        {children}
      </div>
    </div>
  );
};

export default layout;
