import React, { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [data, setData] = useState([]);

	return (
		<Context.Provider value={{ data, setData }}>{children}</Context.Provider>
	);
};

export { ContextProvider, Context };
