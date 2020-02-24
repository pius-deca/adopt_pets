import React from 'react';
import { Link } from '@reach/router';

// function Pet({ name, animal, breed }){
//   return React.createElement("div", {}, [
//     React.createElement("h4", {}, name),
//     React.createElement("h4", {}, animal),
//     React.createElement("h4", {}, breed)
//   ]);
// };

function Pet({name, animal, breed, media, location, id}){

    let hero = 'http://placecorgi.com/300/300';
    if(media.length){
        hero = media[0].small;
    }

    return (
        <Link to={`/details/${id}`} className="pet">
            <div className="mt-4 image-container">
                <img src={hero} alt={name} />
            </div>
            <div className="info">
                <h4 className="text-red">Name : {name.toUpperCase()}</h4>
                <h4 className = "mt-2">{`${animal} - ${breed} - ${location}`}</h4>
            </div>
        </Link>    
    )
}

export default Pet;