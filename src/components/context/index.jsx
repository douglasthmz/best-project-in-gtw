import React, {
  createContext,
  useCallback,
  useContext,
  // useEffect,
  useState,
} from 'react';

const WidgetContext = createContext();

const WidgetProvider = ({ children }) => {
  const [page, setPage] = useState(1);

  const signUp = useCallback(async () => {

  }, []);

  return (
    <WidgetContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        page,
        setPage,
        signUp,
      }}
    >
      {children}
    </WidgetContext.Provider>
  );
};

const useWidgetContext = () => useContext(WidgetContext);

export {
  WidgetProvider,
  useWidgetContext,
};
export default WidgetProvider;
