import React, { useContext } from "react";
import { Context } from "../context/Context";

const MyWatchlist = () => {
	const { watchlist, setWatchlist } = useContext(Context);

	const deleteMovie = (id) => {
		const thisMovie = watchlist.find((item) => item.imdbID === id);
		setWatchlist((prev) =>
			prev.filter((item) => item.imdbID !== thisMovie.imdbID)
		);
	};

	const dataCardsElement = watchlist.map((item) => (
		<>
			<div
				key={item.imdbID}
				className="text-blue-700 tracking-wide p-2 mx-5 mb-4  bg-gray-200 rounded-lg shadow-lg text-xs"
			>
				<div className="mb-2 flex">
					<button className="bg-gray-400 text-white w-1/2 px-4 py-1 rounded-lg">
						mark as done
					</button>
					<button
						onClick={() => deleteMovie(item.imdbID)}
						className="ml-auto bg-red-500 text-white w-1/5 px-4 py-1 rounded-lg"
					>
						x
					</button>
				</div>
				<div className="flex">
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
				</div>
			</div>
		</>
	));

	console.log(watchlist);

	return (
		<div className="flex flex-col items-center">
			<div className="max-w-lg w-full shadow-lg pt-8 h-full">
				<section className="text-center text-blue-100 tracking-wide p-2 mx-5 mb-8 bg-blue-500 rounded-lg shadow-lg">
					My Watch List
				</section>
				<section>{dataCardsElement}</section>
			</div>
		</div>
	);
};

export default MyWatchlist;
