import React, { useState, Redirect, useEffect } from "react";

const Context = React.createContext();

export const Global = (props) => {
  const [user, setUser] = useState(null);

  return (
    <Context.Provider
      value={{
        user,
        setUser,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default Context;
