import React, { useState, useContext, createContext } from 'react';

const LoadingContext = createContext();

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const showLoading = () => setLoading(true);

  const hideLoading = () => setLoading(false);

  return { loading, showLoading, hideLoading };
};

export const LoadingProvider = ({ children }) => {
  const loadingProps = useLoading();
  return (
    <LoadingContext.Provider value={loadingProps}>
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoadingContext = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoadingContext must be used within a LoadingProvider');
  }
  return context;
};