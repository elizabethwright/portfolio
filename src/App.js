import React from 'react';
import './App.css';
import Masonry from 'react-masonry-css'
import Header from './Header'
import image1 from "./images/1.jpg"
import image2 from "./images/2.jpg"
import image3 from "./images/3.jpg"
import image4 from "./images/4.jpg"

function App() {
  var items = [
    {id: 1, name: 'My First Item', image: image1},
    {id: 2, name: 'Another item', image: image2},
    {id: 3, name: 'Third Item', image: image3},
    {id: 4, name: 'Here is the Fourth', image: image4}
  ];
   
  // Convert array to JSX items
  items = items.map(function(item) {
    return (<div className="portfolio-item" key={item.id}>{item.name}<img src={item.image} /></div>)
  });
   
  return (
    <div className="App">
      <Header />

      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {items}
      </Masonry>
    </div>
  );
}

export default App;
