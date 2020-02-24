import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Result from './Results';
import useDropdown from './useDropdown';
import ThemeContext from './ThemeContext';

const SearchParams = () =>{
    const [location , setLocation] = useState("Seattle, WA");
    const [breeds, setBreeds] = useState([])
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS)
    const [breed, BreedDropdown, setBreed] = useDropdown("Breeds", "", breeds)
    const [pets, setPets] = useState([])
    const [theme, setTheme] = useContext(ThemeContext);

    async function requestPets(){
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })

        setPets(animals || []);
    }
    
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
            <form className="form-horizontal form-grey" onSubmit= {e =>{
                e.preventDefault();
                requestPets();
            }}>
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
                <div className="form-group">  
                    <label htmlFor="theme" className="col-sm-10 control-label">
                        Theme
                        <select className="form-control"
                            value ={theme}
                            onChange={e => setTheme(e.target.value)}
                            onBlur={e => setTheme(e.target.value)}
                        >
                            <option value="peru">Peru</option>
                            <option value="darkblue">Dark Blue</option>
                            <option value="mediumorchid">Medium Orchid</option>
                            <option value="chartreuse">Chartreuse</option>
                        </select> 
                    </label> 
                </div>  
                <button className="btn btn-outline-success" style={{ backgroundColor : theme }}>Submit</button>                
            </form>
             <Result pets={pets} />
        </div>
    )
}

export default SearchParams; 