import React, { useState } from 'react';
// import Pet from './Pet';
// import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import SearchParams from "./components/SearchParams";
import Details from './components/Details';
import ThemeContext from './components/ThemeContext';


function App(){
  const themeHook = useState('peru')
  
  return(
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div className="container mt-5">        
          <header>
            <Link to ="/">Adopt Me!</Link>
          </header>  
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

export default App;
