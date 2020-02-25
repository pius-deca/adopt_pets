import React from 'react';
import pet from '@frontendmasters/pet';
import { navigate } from '@reach/router';
import Modal from './Modal';
import Carousel from './Carousel';
import ErrorBoundary from '../error/ErrorBoundary';
import ThemeContext from './ThemeContext';

class Details extends React.Component{
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         loading : true
    //     }
    // }
    state = { 
        loading: true,
        showModal: false 
    };
    componentDidMount(){
        pet.animal(this.props.id).then(({ animal }) =>{
            this.setState({ 
                url: animal.url,
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

    toggleModal = ()=> this.setState({ showModal: !this.state.showModal })
    adopt = () => navigate(this.state.url)
    render(){
        if(this.state.loading){
            return <h3>Loading...</h3>
        }
        const { animal, breed, location, description, media, name, showModal } =this.state;

        return(
            <div className="details">
                <Carousel media={ media }/>
                <div className="mt-5">
                    <h2>{ name }</h2>
                    <h3>{`${ animal } - ${ breed } - ${ location } `}</h3>
                    <ThemeContext.Consumer>
                        {themeHook => (
                            <button className="btn btn-outline-success my-2" onClick={this.toggleModal} style={{ backgroundColor: themeHook[0]}}>
                                Adopt { name }
                            </button>
                        )}
                    </ThemeContext.Consumer>                    
                    <p>{ description }</p>
                    { 
                        showModal ? (
                            <Modal>
                                <div className="container my-5">
                                    <h1>Would you like to adopt {name}?</h1>
                                    <div className="buttons">
                                        <button className="btn btn-outline-success mr-3" onClick={this.adopt}>Yes</button>
                                        <button className="btn btn-outline-danger" onClick={this.toggleModal}>No, I'm a monster</button>
                                    </div>
                                </div>                                                             
                            </Modal>
                        ) : null                         
                    }
                </div> 
            </div>
        )
    }
}
export default function DetailsWithErrorBoundary(props){
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}