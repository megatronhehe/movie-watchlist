import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import ListWatchlist from "../components/ListWatchlist";
import CardWatchlist from "../components/CardWatchlist";

import {
	BsEye,
	BsCheck,
	BsX,
	BsFillGrid3X3GapFill,
	BsClipboardCheckFill,
} from "react-icons/bs";

import { HiSquare2Stack, HiMiniListBullet } from "react-icons/hi2";

const MyWatchlist = () => {
	const { watchlist, setWatchlist, deleteMovie, setSelectedTab } =
		useContext(Context);

	const [filter, setFilter] = useState("true");
	const [isViewCards, setIsViewCards] = useState(true);

	useEffect(() => {
		setSelectedTab("watchlist");
		setFilter("all");
	}, []);

	const markDone = (id) => {
		setWatchlist((prev) =>
			prev.map((item) =>
				item.imdbID === id ? { ...item, isDone: !item.isDone } : item
			)
		);
	};

	const markFavorite = (id) => {
		setWatchlist((prev) =>
			prev.map((item) =>
				item.imdbID === id ? { ...item, isFavorite: !item.isFavorite } : item
			)
		);
	};

	const watchedMoviesCount = watchlist.filter(
		(item) => item.isDone === true
	).length;

	const unwatchedMoviesCount = watchlist.filter(
		(item) => item.isDone === false
	).length;

	const filteredMoviesArray =
		filter === "all"
			? watchlist
			: filter == "false"
			? watchlist.filter((item) => item.isDone === false)
			: watchlist.filter((item) => item.isDone === true);

	const cardsElement = filteredMoviesArray.map((item) => (
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
			plot={item.Plot}
			awards={item.Awards}
			released={item.Released}
			type={item.Type}
			isDone={item.isDone}
			isFavorite={item.isFavorite}
			isBad={item.isBad}
			markDone={markDone}
			markFavorite={markFavorite}
			deleteMovie={deleteMovie}
		/>
	));

	const listElement = filteredMoviesArray.map((item) => (
		<ListWatchlist
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
			isDone={item.isDone}
			isFavorite={item.isFavorite}
			isBad={item.isBad}
			markDone={markDone}
			markFavorite={markFavorite}
			deleteMovie={deleteMovie}
		/>
	));

	const countPercentage = (done, total) => {
		return ((100 * done) / total).toFixed(1);
	};

	const CardsContainer = ({ children }) => (
		<div className="grid gap-4 sm:grid-cols-2">{children}</div>
	);
	const ListContainer = ({ children }) => (
		<div className="flex flex-col gap-4">{children}</div>
	);

	return (
		<div className="">
			<section className="p-2 mt-8 mb-2 tracking-wide text-center text-blue-100 bg-blue-500 rounded-lg ">
				My Watch List
			</section>

			<section className="flex gap-2 text-sm text-white">
				<div className="flex flex-col items-center justify-center w-1/2 h-24 rounded-lg shadow-md bg-lime-500">
					<div className="flex text-2xl">
						<BsEye />
						<BsCheck />
					</div>
					<h1 className="mt-2">Watched Count</h1>
					<p className="text-xl font-bold">
						{watchedMoviesCount}
						<span className="text-xs">/{watchlist.length}</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center w-1/2 h-24 bg-gray-300 rounded-lg shadow-md">
					<div className="flex text-2xl">
						<BsEye />
						<BsX />
					</div>
					<h1 className="mt-2 drop-shadow-md">Unwatched Count</h1>
					<p className="text-xl font-bold drop-shadow-md">
						{unwatchedMoviesCount}
						<span className="text-xs">/{watchlist.length}</span>
					</p>
				</div>
				<div className="flex flex-col items-center justify-center w-1/2 h-24 bg-blue-300 rounded-lg shadow-md">
					<div className="flex text-2xl">
						<BsClipboardCheckFill />
					</div>
					<h1 className="mt-2 drop-shadow-md">Progress</h1>
					<p className="text-xl font-bold drop-shadow-md">
						{watchlist.length < 1
							? 0
							: countPercentage(watchedMoviesCount, watchlist.length)}{" "}
						%
					</p>
				</div>
			</section>

			<section className="flex flex-col justify-between gap-4 px-2 my-8 text-gray-500 sm:items-center sm:flex-row">
				<div className="flex items-center">
					<p className="pr-4 mr-4 border-r border-gray-400">
						<BsFillGrid3X3GapFill />
					</p>
					<ul className="flex gap-8 ">
						<li>
							<button onClick={() => setFilter("all")}>all</button>
						</li>
						<li>
							<button onClick={() => setFilter("true")}>watched</button>
						</li>
						<li>
							<button onClick={() => setFilter("false")}>not watched</button>
						</li>
					</ul>
				</div>
				<button
					onClick={() => setIsViewCards((prev) => !prev)}
					className="flex items-center w-24"
				>
					<p className="pr-4 mr-4 border-r border-gray-400">
						{isViewCards ? <HiSquare2Stack /> : <HiMiniListBullet />}
					</p>
					{isViewCards ? "cards" : "list"}
				</button>
			</section>

			<section className="mt-4">
				{watchlist.length > 0 ? (
					isViewCards ? (
						<CardsContainer>{cardsElement}</CardsContainer>
					) : (
						<ListContainer>{listElement}</ListContainer>
					)
				) : (
					<Link to="/search" className="flex justify-center">
						<p className="w-1/2 mt-16 text-sm text-center text-gray-400">
							your watchlist is empty! go start and search for a movie or a show{" "}
							<span className="font-bold">here</span>
						</p>
					</Link>
				)}
			</section>
		</div>
	);
};

export default MyWatchlist;
