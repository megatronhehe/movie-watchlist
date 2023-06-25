import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import CardWatchlist from "./CardWatchlist";

const MyWatchlist = () => {
	const { watchlist, setWatchlist, deleteMovie, setSelectedTab } =
		useContext(Context);

	useEffect(() => setSelectedTab("watchlist"), []);

	const [filter, setFilter] = useState(false);
	const [allFilter, setAllFilter] = useState(true);

	const markDone = (id) => {
		setWatchlist((prev) =>
			prev.map((item) =>
				item.imdbID === id ? { ...item, isDone: !item.isDone } : item
			)
		);
	};

	const watchedMoviesCount = watchlist.filter(
		(item) => item.isDone === true
	).length;

	const unwatchedMoviesCount = watchlist.filter(
		(item) => item.isDone === false
	).length;

	const filteredMovies = watchlist.filter((item) => item.isDone === filter);

	const filteredCardsElement = filteredMovies.map((item) => (
		<CardWatchlist
			key={item.imdbID}
			imdbID={item.imdbID}
			poster={item.Poster}
			title={item.Title}
			year={item.Year}
			imdbRating={item.imdbRating}
			runtime={item.Runtime}
			genre={item.Genre}
			actors={item.Actors}
			isDone={item.isDone}
			markDone={markDone}
			deleteMovie={deleteMovie}
		/>
	));

	const allCardsElement = watchlist.map((item) => (
		<CardWatchlist
			key={item.imdbID}
			imdbID={item.imdbID}
			poster={item.Poster}
			title={item.Title}
			year={item.Year}
			imdbRating={item.imdbRating}
			runtime={item.Runtime}
			genre={item.Genre}
			actors={item.Actors}
			isDone={item.isDone}
			markDone={markDone}
			deleteMovie={deleteMovie}
		/>
	));

	return (
		<div className="flex flex-col items-center">
			<div className="max-w-lg w-full shadow-lg pt-8 h-full">
				<section className="text-center text-blue-100 tracking-wide p-2 mx-5 mb-4 bg-blue-500 rounded-lg shadow-lg">
					My Watch List
				</section>

				<section className="flex px-5 gap-5 text-white text-sm">
					<div className="bg-lime-500 w-1/2 h-24 rounded-lg shadow-md flex flex-col items-center justify-center">
						<h1>Watched Count</h1>
						<p className="text-xl font-bold">
							{watchedMoviesCount}
							<span className="text-xs">/{watchlist.length}</span>
						</p>
					</div>
					<div className="bg-gray-300 w-1/2 h-24 rounded-lg shadow-md flex flex-col items-center justify-center">
						<h1 className="drop-shadow-md">Unwatched Count</h1>
						<p className="text-xl font-bold drop-shadow-md">
							{unwatchedMoviesCount}
							<span className="text-xs">/{watchlist.length}</span>
						</p>
					</div>
				</section>

				<nav className="mt-4">
					<ul className="text-blue-600 text-sm flex justify-center items-center mb-4 ">
						<li className="bg-gray-200 py-1 px-3 rounded-l-xl">
							<button onClick={() => setAllFilter(true)}>all</button>
						</li>
						<li className="bg-gray-200 py-1 px-3">
							<button
								onClick={() => {
									setFilter(true);
									setAllFilter(false);
								}}
							>
								watched
							</button>
						</li>
						<li className="bg-gray-200 py-1 px-3 rounded-r-xl">
							<button
								onClick={() => {
									setFilter(false);
									setAllFilter(false);
								}}
							>
								unwatched
							</button>
						</li>
					</ul>
				</nav>

				<section>
					{watchlist.length > 0 ? (
						allFilter ? (
							allCardsElement
						) : (
							filteredCardsElement
						)
					) : (
						<Link to="/search" className="flex justify-center">
							<p className="text-center w-1/2 mb-8 text-gray-400 text-sm">
								your watchlist is empty! go start and search for a movie or a
								show <span className="font-bold">here</span>
							</p>
						</Link>
					)}
				</section>
			</div>
		</div>
	);
};

export default MyWatchlist;
