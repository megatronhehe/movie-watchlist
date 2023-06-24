import React from "react";

const CardWatchlist = ({
	imdbID,
	poster,
	title,
	year,
	imdbRating,
	runtime,
	genre,
	actors,
	isDone,
	markDone,
	deleteMovie,
}) => {
	return (
		<div className="text-blue-700 tracking-wide p-2 mx-5 mb-4  bg-gray-200 rounded-lg shadow-lg text-xs relative">
			<div className="flex">
				<img
					src={poster}
					className="object-cover rounded-lg bg-gray-200 shadow-md h-full w-1/3 "
				></img>
				<div className="ml-4 w-full">
					<h1 className="text-md font-bold border-b border-blue-500 text-center mb-2 pb-3">
						{title} <span className="">({year})</span>
					</h1>
					<div className="flex justify-between items-center gap-2">
						<ul className="">
							<li className="text-center">{imdbRating}</li>
							<li>{runtime}</li>
							<li>{genre}</li>
							<li>{actors}</li>
						</ul>
					</div>
				</div>
			</div>
			<button
				onClick={() => markDone(imdbID)}
				className={`w-32 absolute top-0 left-5 p-1 rounded-b-lg  text-blue-100 shadow-md ${
					isDone ? "bg-lime-500" : "bg-gray-400"
				}`}
			>
				{isDone ? "watched" : "mark as watched"}
			</button>
			<button
				onClick={() => deleteMovie(imdbID)}
				className="absolute top-0 right-2 py-2 px-3 rounded-b-lg bg-red-500 text-blue-100 shadow-md"
			>
				X
			</button>
		</div>
	);
};

export default CardWatchlist;
