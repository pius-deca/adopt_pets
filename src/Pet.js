import React from 'react';

// function Pet({ name, animal, breed }){
//   return React.createElement("div", {}, [
//     React.createElement("h4", {}, name),
//     React.createElement("h4", {}, animal),
//     React.createElement("h4", {}, breed)
//   ]);
// };

function Pet({name, animal, breed}){
    return (
        <div>
            <h4>Name : {name.toUpperCase()}</h4>
            <h4>{animal}</h4>
            <h4>{breed}</h4>
        </div>
    )
}

export default Pet;