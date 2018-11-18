import React from 'react';

const layout = ({ children, title }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">{title}</div>
      </nav>
      <div className="container">{children}</div>
    </div>
  );
};

export default layout;
