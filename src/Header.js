import React, { useState, useEffect } from 'react'
import logo from './logo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Header () {
    // Declare a new state variable, which we'll call "isVisible"
  const [isVisible, setIsVisible] = useState(false);
  const [menuSticky, setMenuSticky ] = useState(false);

  const handleScroll = () => {
      const distanceFromTop = window.pageYOffset;
      if (distanceFromTop > 235 && menuSticky !== true) {
        setMenuSticky(true);
      } else {
          setMenuSticky(false);
      }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const menuClick = () => {
    //   check if its already visible
    if (isVisible) {
        // if yes, make invisible
        setIsVisible(false)
    } else {
        // if no, make visible
        setIsVisible(true)
    }
    
  }
    return (
        <div className={`header ${ menuSticky ? "sticky" : ""}`}>
            <div className="container-header">
                <div className="logo"><img src={logo}/></div>
                <h1>Elizabeth Wright</h1>
                </div>
                <button className="menu-toggle" onClick={menuClick}><FontAwesomeIcon icon={faBars} /></button>
                <div className={`${ isVisible ? "mobile-menu-visible" : ""} side-menu`}>
                <button className="menu-close" onClick={menuClick}><FontAwesomeIcon icon={faTimes} /></button>
                    <ul>
                        <li>RESUME</li>
                        <li>CONTACT </li>
                    </ul>
                
                
                </div>
            
        </div>
    )
}

export default Header