import React from 'react';
// import Pet from './Pet';
import { render } from "react-dom"
import { Router, Link } from "@reach/router"
import SearchParams from "./SearchParams";
import Details from './Details';

// function App(){
//   return React.createElement("div", {}, [
//     React.createElement("h2", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name : "Zack",
//       animal : "Dog",
//       breed : "German Sheperd"
//     }),
//     React.createElement(Pet, {
//       name : "Spooky",
//       animal : "Bird",
//       breed : "Wood Picker"
//     })
//   ])
// }

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
