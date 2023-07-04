import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

const SearchMovie = () => {
	const {
		data,
		setData,
		watchlist,
		setWatchlist,
		deleteMovie,
		setSelectedTab,
	} = useContext(Context);

	const [isSearching, setIsSearching] = useState(false);
	const [searchInput, setSearchInput] = useState("");
	const [error, setError] = useState(false);

	const getMovieData = async (e) => {
		e.preventDefault();
		setError(false);
		setIsSearching(true);
		setData([]);
		try {
			const res = await fetch(
				`http://www.omdbapi.com/?s=${searchInput}&apikey=8217fb31`
			);
			const data = await res.json();
			for (const item of data.Search) {
				const res = await fetch(
					`http://www.omdbapi.com/?i=${item.imdbID}&apikey=8217fb31`
				);
				const movieData = await res.json();
				setData((prev) => [...prev, movieData]);
			}
		} catch (err) {
			setError(true);
		}
		setIsSearching(false);
	};

	useEffect(() => {
		setSelectedTab("search");
	}, []);

	const handleChange = (event) => {
		const { value } = event.target;
		setSearchInput(value);
	};

	const isExistInWatchlist = (id) => {
		return watchlist.some((item) => item.imdbID === id);
	};

	const addWatchlist = (id) => {
		const thisMovie = {
			...data.find((item) => item.imdbID === id),
			isDone: false,
		};
		!isExistInWatchlist(id)
			? setWatchlist((prev) => [...prev, thisMovie])
			: deleteMovie(thisMovie.imdbID);
	};

	const dataCardsElement = data.map((item) => (
		<div
			key={item.imdbID}
			className="relative flex p-2 mx-5 mb-4 text-xs tracking-wide text-blue-700 bg-gray-200 rounded-lg shadow-lg"
		>
			<img
				src={item.Poster}
				className="object-cover w-1/3 h-full bg-gray-200 rounded-lg shadow-md "
			></img>
			<div className="w-full ml-4">
				<h1 className="pb-3 mb-2 font-bold text-center border-b border-blue-500 text-md">
					{item.Title} <span className="">({item.Year})</span>
				</h1>
				<div className="flex items-center justify-between gap-2">
					<ul className="">
						<li className="text-center">{item.imdbRating}</li>
						<li>{item.Runtime}</li>
						<li>{item.Genre}</li>
						<li>{item.Actors}</li>
					</ul>
				</div>
			</div>
			<button
				onClick={() => addWatchlist(item.imdbID)}
				className="px-2 ml-2 text-xl text-blue-500 bg-gray-100 border border-blue-500 rounded-lg"
			>
				+
			</button>
			{isExistInWatchlist(item.imdbID) && (
				<p className="absolute top-0 p-2 text-xs text-blue-100 bg-blue-500 rounded-b-lg left-6">
					Listed In Watchlist
				</p>
			)}
		</div>
	));

	return (
		<div className="flex flex-col items-center">
			<div className="w-full h-full max-w-lg pt-8 shadow-lg">
				<form className="flex p-2 mx-5 mb-8 tracking-wide text-blue-500 bg-blue-300 rounded-lg shadow-lg">
					<input
						className="w-full px-4 py-2 rounded-lg"
						type="text"
						onChange={handleChange}
						placeholder="type here to search"
						name="search"
						value={searchInput}
					/>
					<button
						onClick={getMovieData}
						className="w-12 ml-2 bg-blue-200 rounded-lg"
					>
						Q
					</button>
				</form>
				<section>
					{isSearching ? (
						<p className="m-12 text-center text-gray-400">loading . . .</p>
					) : (
						dataCardsElement
					)}
					{error && (
						<p className="m-12 text-center text-gray-400">
							something went wrong. please search something else.
						</p>
					)}
				</section>
			</div>
		</div>
	);
};

export default SearchMovie;
