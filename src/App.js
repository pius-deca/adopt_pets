import React from 'react';
// import Pet from './Pet';
// import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import SearchParams from "./components/SearchParams";
import Details from './components/Details';


function App(){
  
  return(
    <React.StrictMode>
      <div className="container mt-5">        
        <header>
          <Link to ="/">Adopt Me!</Link>
        </header>  
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  )
}

export default App;
