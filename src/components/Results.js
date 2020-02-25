import React from 'react';
import Pet from './Pet';

const Results = ({ pets }) =>{
    return (
        <div className="search">
            {pets.length === 0 ? (
                <h3>No Pets Found</h3>
            ) : (
                <div className="bg-form px-3">{
                    pets.map(pet =>(
                        <Pet                        
                            animal ={pet.type}
                            key = {pet.id}
                            name = {pet.name}
                            breed = {pet.breeds.primary}
                            media = {pet.photos}
                            location = {`${pet.contact.address.city}, 
                                ${pet.contact.address.state}`}
                            id = {pet.id}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Results;