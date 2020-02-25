import React from 'react';

class Carousel extends React.Component{

    state = {
        photos: [],
        active: 0
    }
    static getDerivedStateFromProps({ media }){
        let photos = ['http://placecorgi.com/6000/600'];

        if(media.length){
            photos = media.map(({ large }) => large);
        }

        return { photos };
    }

    handleIndexClick = event =>{
        this.setState({
            active: parseInt(event.target.dataset.index)
        })
    };

    render(){
        const { photos, active } = this.state;

        return (
            <div className ="carousel d-flex">
                <img src = {photos[active]} alt="animal" className ="mt-5 mr-5" width="350"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index) =>(
                        <img
                            key ={photo}
                            onClick = {this.handleIndexClick}
                            data-index = {index}
                            src ={photo}
                            className = {index === active ? "active" : ""}
                            alt="animal thumbnail"
                            className ="rounded-circle mt-5 mr-5"
                            width="33%"
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;