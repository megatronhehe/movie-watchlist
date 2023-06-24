import React, { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [watchlist, setWatchlist] = useState([]);

	const deleteMovie = (id) => {
		setWatchlist((prev) => prev.filter((item) => item.imdbID !== id));
	};

	return (
		<Context.Provider
			value={{ data, watchlist, setData, setWatchlist, deleteMovie }}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };
