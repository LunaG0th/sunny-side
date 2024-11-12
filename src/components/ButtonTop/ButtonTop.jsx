import React, { useState, useEffect } from 'react';
import './ButtonTop.css';

function ButtonTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      // Show button if scroll is greater than 100px
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    //scroll to top page on click
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    isVisible && ( // Only show button if isVisible is true
      <div className='button__top' onClick={scrollToTop}>
        <img src='/backToTop.svg' alt='Back to top' />
      </div>
    )
  );
}

export default ButtonTop;
