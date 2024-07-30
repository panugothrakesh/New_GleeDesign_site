// ScrollToTop.js
import {useEffect } from 'react';

const ScrollToTop = ({ children }) => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return children;
};

export default ScrollToTop;
