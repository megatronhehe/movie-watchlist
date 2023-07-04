import React from "react";

import {
	BsCheckLg,
	BsTrash3Fill,
	BsStarFill,
	BsClockFill,
	BsFillCollectionPlayFill,
	BsFillPeopleFill,
} from "react-icons/bs";

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
		<div className="relative p-2 mx-5 mb-4 text-xs tracking-wide text-blue-700 bg-gray-200 rounded-lg shadow-lg">
			<div className="flex">
				<img
					src={poster}
					className="object-cover w-1/3 h-full bg-gray-200 rounded-lg shadow-md "
				></img>
				<div className="w-full ml-4">
					<h1 className="pb-3 mb-2 font-bold text-center border-b border-blue-500 text-md">
						{title} <span className="">({year})</span>
					</h1>
					<div className="flex items-center justify-between gap-2">
						<ul>
							<li className="flex items-center justify-center gap-2">
								<BsStarFill color="orange" />
								{imdbRating}
							</li>
							<li className="flex items-center gap-2">
								<BsClockFill />
								{runtime}
							</li>
							<li className="flex items-center gap-2">
								<BsFillCollectionPlayFill />
								{genre}
							</li>
							<li className="flex gap-2">
								<BsFillPeopleFill />
								{actors}
							</li>
						</ul>
					</div>
				</div>
			</div>
			<button
				onClick={() => markDone(imdbID)}
				className={`w-32 absolute top-0 left-5 p-1 rounded-b-lg  text-white tracking-wide shadow-md ${
					isDone ? "bg-lime-500" : "bg-gray-400"
				}`}
			>
				{isDone ? (
					<p className="flex items-center justify-center gap-2">
						watched <BsCheckLg />
					</p>
				) : (
					"mark as watched"
				)}
			</button>
			<button
				onClick={() => deleteMovie(imdbID)}
				className="absolute top-0 px-3 py-2 text-blue-100 bg-red-400 rounded-b-lg shadow-md right-2"
			>
				<BsTrash3Fill size="15" />
			</button>
		</div>
	);
};

export default CardWatchlist;
