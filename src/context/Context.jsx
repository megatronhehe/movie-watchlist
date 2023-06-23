import React, { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [watchlist, setWatchlist] = useState([]);

	return (
		<Context.Provider value={{ data, watchlist, setData, setWatchlist }}>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };
