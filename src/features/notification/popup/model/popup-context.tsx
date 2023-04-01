import React from 'react';

export const PopupContext = React.createContext<PopupContextObj>({
  popup: {
    isVisible: false,
    type: 'error',
    message: '',
  },
  emitPopup: () => {},
});

const PopupContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [popup, setPopup] = React.useState<PopupState>({
    isVisible: false,
    type: 'error',
    message: '',
  });

  const emitPopup = (popupType: PopupState) => {
    setPopup(popupType);
  };

  const contextValue: PopupContextObj = React.useMemo(
    () => ({
      popup,
      emitPopup,
    }),
    [popup]
  );

  return (
    <PopupContext.Provider value={contextValue}>
      {props.children}
    </PopupContext.Provider>
  );
};

export default PopupContextProvider;
