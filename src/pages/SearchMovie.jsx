import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

import CardSearch from "../components/CardSearch";

import { BsSearch, BsEmojiFrown } from "react-icons/bs";

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
			isFavorite: false,
		};
		!isExistInWatchlist(id)
			? setWatchlist((prev) => [thisMovie, ...prev])
			: deleteMovie(thisMovie.imdbID);
	};

	const dataCardsElement = data.map((item) => (
		<CardSearch
			key={item.imdbID}
			imdbID={item.imdbID}
			poster={item.Poster}
			title={item.Title}
			year={item.Year}
			imdbRating={item.imdbRating}
			runtime={item.Runtime}
			genre={item.Genre}
			actors={item.Actors}
			plot={item.Plot}
			awards={item.Awards}
			released={item.Released}
			type={item.Type}
			addWatchlist={addWatchlist}
			isExistInWatchlist={isExistInWatchlist}
		/>
	));

	return (
		<>
			<form className="flex justify-between gap-2 p-2 my-8 tracking-wide text-blue-500 border rounded-lg shadow-md">
				<input
					className="w-full p-2 px-4 rounded-lg outline-none "
					type="text"
					onChange={handleChange}
					placeholder="type here to search"
					name="search"
					value={searchInput}
				/>
				<button
					onClick={getMovieData}
					disabled={!searchInput}
					className="flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-100 "
				>
					<BsSearch />
				</button>
			</form>

			<section>
				{isSearching ? (
					<p className="m-12 text-center text-gray-400">loading . . .</p>
				) : (
					<div className="grid gap-4 sm:grid-cols-2 ">{dataCardsElement}</div>
				)}
				{error && (
					<p className="flex items-center justify-center gap-2 m-12 text-center text-gray-400">
						something went wrong. please try again <BsEmojiFrown />
					</p>
				)}
			</section>
		</>
	);
};

export default SearchMovie;
