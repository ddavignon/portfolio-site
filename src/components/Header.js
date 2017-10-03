import React from 'react';

const Header = () => {
    return (
         <header className="page-header-section">
            <div className="row">
               <div className="col-md-3">
                  <img className="title-logo" src="images/website-logo.png" alt="Portfolio logo" />
               </div>
               <div className="col-md-9 text-right text-uppercase">
                  <h1 className="text-thin title-super">Dustin D'Avignon</h1>
                  <h4>Full Stack Enthusiast</h4>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <hr />
               </div>
            </div>
         </header>   
    );
}

export default Header;
