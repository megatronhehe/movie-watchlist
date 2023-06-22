import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context/Context";

const SearchMovie = () => {
	const { data, setData } = useContext(Context);

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
		setData([]);
	}, [isSearching]);

	const handleChange = (event) => {
		const { value } = event.target;
		setSearchInput(value);
	};

	const handleSearch = () => {
		setIsSearching(true);
	};

	console.log(data);

	const dataCardsElement = data.map((item) => (
		<div
			key={item.imdbID}
			className="flex h-40 text-blue-500 tracking-wide p-2 mx-5 mb-8 bg-gray-100 rounded-lg shadow-lg text-sm"
		>
			<img
				src={item.Poster}
				className="rounded-lg bg-gray-200 shadow-md h-full w-1/3"
			></img>
			<div className="ml-4">
				<h1 className="text-lg">
					{item.Title} <span className="text-sm">{item.Year}</span>
				</h1>
				<p>{item.imdbRating}</p>
				<p>{item.Runtime}</p>
				<p>{item.Genre}</p>
			</div>
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
