import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () =>{
    const [location , setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds)
    
    useEffect(() =>{
        // pet.breeds("dog").then(console.log, console.error);
        setBreeds([]);
        setBreed("");
        pet.breeds(animal).then(({ breeds }) =>{
            const breedStrings = breeds.map(({ name}) => name);
            setBreeds(breedStrings);

        }, console.error)
    }, [animal, setBreed, setBreeds]);

    return (
        <div className ="search-params">
            <h3>{location}</h3>
            <form className="form-horizontal form-grey">
                <div className="form-group">
                    <label htmlFor="location" className="col-sm-2 control-label">
                        location                        
                    </label>                        
                    <div className="col-sm-10">
                        <input 
                            className="form-control"
                            id="location" 
                            value={location}
                            placeholder="Location" 
                            onChange = {e => setLocation(e.target.value)}
                        />
                    </div>
                </div>  
                <div className="form-group">
                    <AnimalDropdown />
                </div> 
                <div className="form-group">  
                    <BreedDropdown />
                </div>     
                <button className="btn btn-outline-success">Submit</button>
                
            </form>
        </div>
    )
}

export default SearchParams;