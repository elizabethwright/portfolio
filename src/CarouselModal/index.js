import React, { Component, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./style.css";
import { Carousel } from 'react-responsive-carousel';

function CarouselModal(props) {
    

    const carouselItems = props.items.map(function(item) {
        return ( <div
        key={item.id}>
            <img src={item.image} />
            {/* <p className="legend">{item.name}</p> */}
        </div>)
      });

    return (
        <div className="carousel-modal">
            <div className="carousel-modal-background" onClick={() => props.setModalVisible(false)}>
            </div>
            <Carousel 
                centerMode={false}
                centerSlidePercentage={80}
                swipeable={true}
                width="100%"
                showThumbs={false}
                selectedItem={props.currentItem}
            >
                {carouselItems}    
            </Carousel>
        </div>
    )
}

export default CarouselModal 
// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>