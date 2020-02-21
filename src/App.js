import React from 'react';

const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h4", {}, name),
    React.createElement("h4", {}, animal),
    React.createElement("h4", {}, breed)
  ])
}

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name : "Zack",
      animal : "Dog",
      breed : "German Sheperd"
    }),
    React.createElement(Pet, {
      name : "Spooky",
      animal : "Bird",
      breed : "Wood Picker"
    })
  ])
}


export default App;
