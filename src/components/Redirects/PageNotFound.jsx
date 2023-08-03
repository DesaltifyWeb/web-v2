import React, { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    window.location.href = '/'; 
  }, []);

  return null;
};

export default PageNotFound;