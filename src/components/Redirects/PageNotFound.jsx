import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const PageNotFound = () => {
  const history = useHistory();

  useEffect(() => {
    history.push('/');
  }, [history]);

  return null;
};

export default PageNotFound;
