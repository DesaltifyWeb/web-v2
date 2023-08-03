import React, { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    window.location.href = 'https://desaltify.org/'; 
  }, []);

  return null;
};

export default PageNotFound;