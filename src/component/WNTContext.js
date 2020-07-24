import React from "react";

export const RNContext = React.createContext();

const RNWrap = ({connection, children}) => (
    <RNContext.Provider value={connection}>
        {children}
    </RNContext.Provider>
);


export default RNWrap