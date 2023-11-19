import React from 'react';
import "./App.css";

export const  App = () => {
    return (
        <section>
            <div className="header"><h1>Header</h1></div>
            <div className="middle">
                <div className="sidenav"><h1>SideNav</h1></div>
                <div className="content"><h1>MainContent</h1></div>
            </div>
            <div className="footer"><h1>footer</h1></div>
        </section>
      )
}

export  default App;
