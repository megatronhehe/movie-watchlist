import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

const SearchMovie = () => {
	const { data, setData, watchlist, setWatchlist } = useContext(Context);

	const [isSearching, setIsSearching] = useState(false);
	const [searchInput, setSearchInput] = useState("");

	useEffect(() => {
		isSearching &&
			fetch(`http://www.omdbapi.com/?s=${searchInput}&apikey=8217fb31`)
				.then((res) => res.json())
				.then((data) =>
					data.Search.forEach((item) =>
						fetch(`http://www.omdbapi.com/?i=${item.imdbID}&apikey=8217fb31`)
							.then((res) => res.json())
							.then((data) => setData((prev) => [...prev, data]))
							.catch((err) => console.log(err))
					)
				)
				.catch((err) => console.log(err));
		setIsSearching(false);
	}, [isSearching]);

	const handleChange = (event) => {
		const { value } = event.target;
		setSearchInput(value);
	};

	const handleSearch = () => {
		setData([]);
		setIsSearching(true);
	};

	const addWatchlist = (id) => {
		const thisMovie = {
			...data.find((item) => item.imdbID === id),
			isDone: false,
		};
		const isExist = watchlist.some((item) => item.imdbID === thisMovie.imdbID);
		!isExist && setWatchlist((prev) => [...prev, thisMovie]);
	};

	const isExistInWatchlist = (id) => {
		return watchlist.some((item) => item.imdbID === id);
	};

	const dataCardsElement = data.map((item) => (
		<div
			key={item.imdbID}
			className="flex text-blue-700 tracking-wide p-2 mx-5 mb-4  bg-gray-200 rounded-lg shadow-lg text-xs relative"
		>
			<img
				src={item.Poster}
				className="object-cover rounded-lg bg-gray-200 shadow-md h-full w-1/3 "
			></img>
			<div className="ml-4 w-full">
				<h1 className="text-md font-bold border-b border-blue-500 text-center mb-2 pb-2">
					{item.Title} <span className="">({item.Year})</span>
				</h1>
				<div className="flex justify-between items-center gap-2">
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
				className="bg-gray-100 px-2 rounded-lg ml-2 text-blue-500 text-xl border border-blue-500"
			>
				+
			</button>
			{isExistInWatchlist(item.imdbID) && (
				<p className="absolute top-0 left-6 p-2 rounded-b-lg bg-blue-500 text-blue-100 ">
					Listed In Watchlist
				</p>
			)}
		</div>
	));

	return (
		<div className="flex flex-col items-center">
			<div className="max-w-lg w-full shadow-lg pt-8 h-full">
				<section className="flex text-blue-500 tracking-wide p-2 mx-5 mb-8 bg-blue-300 rounded-lg shadow-lg">
					<input
						className="w-full rounded-lg px-4 py-2"
						type="text"
						onChange={handleChange}
						placeholder="type here to search"
						name="search"
						value={searchInput}
					/>
					<button
						onClick={handleSearch}
						className="bg-blue-200 w-12 rounded-lg ml-2"
					>
						Q
					</button>
				</section>
				<section className="">{dataCardsElement}</section>
			</div>
		</div>
	);
};

export default SearchMovie;
