import React from 'react';
import pet from '@frontendmasters/pet';
import Carousel from './Carousel';

class Details extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         loading : true
    //     }
    // }
    state = { 
        loading: true 
    };
    componentDidMount(){
      pet.animal(parseInt(this.props.id)).then(({ animal }) =>{
            this.setState({ 
                name: animal.name,
                animal: animal.type,
                location: `${animal.contact.address.city},
                ${animal.contact.address.state}`,
                description : animal.description,
                media : animal.photos,
                breed: animal.breeds.primary,
                loading: false
            })
        }, console.error)
    }
    render(){
        if(this.state.loading){
            return <h3>Loading...</h3>
        }
        const { animal, breed, location, description, media, name } =this.state;

        return(
            <div className="details">
                <Carousel media={ media }/>
                <div>
                    <h2>{ name }</h2>
                    <h3>{`${ animal } - ${ breed } - ${ location } `}</h3>
                    <button className="btn btn-outline-success">Adopt { name }</button>
                    <p>{ description }</p>
                </div>
            </div>
        )
    }
}
export default Details;