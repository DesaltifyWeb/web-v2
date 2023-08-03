import React, { useEffect } from 'react';

const PageNotFound = () => {
  useEffect(() => {
    window.location.href = ''; // Redirects to the home page
  }, []);

  return null;
};

export default PageNotFound;
