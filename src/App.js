import React, {useState} from 'react';
import './App.css';
import Masonry from 'react-masonry-css'
import Header from './Header'
import PortfolioItem from './PortfolioItem'
import CarouselModal from './CarouselModal'
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import image4 from "./images/4.jpg"
import image5 from "./images/5.jpg"
import image6 from "./images/6.jpg"
import image7 from "./images/7.jpg"
import image8 from "./images/8.jpg"
import image9 from "./images/9.jpg"
import image10 from "./images/10.jpg"


function App() {
  var items = [
    {id: 1, name: 'New Mexico', image: image1},
    {id: 2, name: 'Phase II Window Treatments', image: image2},
    {id: 3, name: 'Navajo Rug', image: image3},
    {id: 4, name: 'Wedding Logo', image: image4},
    {id: 5, name: 'Pretty Yum Things Bakery', image: image5},
    {id: 6, name: "Sweet Em's Treats", image: image6},
    {id: 7, name: 'Barrilitos - "Drink It For A Change"', image: image7},
    {id: 8, name: 'Barrilitos - "Drink It For A Change"', image: image8},
    {id: 9, name: 'Barrilitos - "Drink It For A Change"', image: image9},
    {id: 10, name: 'Barrilitos - Papel Picado Banners', image: image10}
  ];
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
   
  // // Convert array to JSX items
  // items = items.map(function(item) {
  //   return (<div className="portfolio-item" key={item.id}>{item.name}<img src={item.image} /></div>)
  // });
  const clickPortfolioItem = (idx) => {
    setCurrentItem(idx);
    setModalVisible(true);
  }

  const portfolioItems = items.map(function(item, i) {
      return (
      <PortfolioItem 
        key={i}
        item={item}
        onClick={() => clickPortfolioItem(i)} 
      />
      )

    });

   
  return (
    <div className="App">
      <Header />

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid container"
        columnClassName="my-masonry-grid_column">
        {portfolioItems}
      </Masonry>

      { modalVisible ? (
        <CarouselModal 
          items={items}
          setModalVisible={setModalVisible}
          currentItem={currentItem}
        />) : null }

    </div>
  );
}

export default App;
