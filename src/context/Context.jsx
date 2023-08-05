import React, { useState, createContext } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [data, setData] = useState([]);
	const [watchlist, setWatchlist] = useState([]);
	const [selectedTab, setSelectedTab] = useState("");
	const [isViewCards, setIsViewCards] = useState(true);

	const deleteMovie = (id) => {
		setWatchlist((prev) => prev.filter((item) => item.imdbID !== id));
	};

	return (
		<Context.Provider
			value={{
				data,
				watchlist,
				selectedTab,
				isViewCards,
				setIsViewCards,
				setSelectedTab,
				setData,
				setWatchlist,
				deleteMovie,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };
