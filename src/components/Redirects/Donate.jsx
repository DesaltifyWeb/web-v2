import React, { useEffect } from 'react';

const Donate = () => {
  useEffect(() => {
    window.location.href = 'https://www.gofundme.com/f/desaltify/donate'; 
  }, []);

  return null;
};

export default Donate;
