import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import CardWatchlist from "./CardWatchlist";

const MyWatchlist = () => {
	const { watchlist, setWatchlist, deleteMovie } = useContext(Context);

	const [filter, setFilter] = useState(false);
	const [allFilter, setAllFilter] = useState(true);

	const markDone = (id) => {
		setWatchlist((prev) =>
			prev.map((item) =>
				item.imdbID === id ? { ...item, isDone: !item.isDone } : item
			)
		);
	};

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
				<nav>
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
