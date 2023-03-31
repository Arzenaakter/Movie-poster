import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary  container p-4 border border-1">
                <div className="container-fluid">
                     <a className="navbar-brand">Movie Poster</a>
                 <form className="d-flex" role="search">
                      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit">Search</button>
                 </form>
  </div>
</nav>
            
        </>
    );
};

export default Header;