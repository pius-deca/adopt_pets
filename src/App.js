import React from 'react';
import Pet from './Pet';
import SearchParams from "./SearchParams";

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
    <div className="container mt-5">
      <h2>Adopt Me!</h2>
      {/* <Pet name = "Zack" animal = "Dog" breed ="German Sheperd"/>
      <Pet name = "Spooky" animal = "Bird" breed ="Wood Picker"/> */}
      <SearchParams />
    </div>
  )
}

export default App;
