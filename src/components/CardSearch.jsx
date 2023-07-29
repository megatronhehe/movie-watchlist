import React, { useState } from "react";
import {
	BsBookmarkPlusFill,
	BsBookmarkCheckFill,
	BsStarFill,
	BsClock,
	BsFilm,
	BsFillPeopleFill,
	BsFillTrophyFill,
	BsCalendar3,
	BsChevronDown,
	BsChevronUp,
} from "react-icons/bs";

const CardSearch = ({
	poster,
	title,
	year,
	imdbRating,
	runtime,
	genre,
	actors,
	plot,
	imdbID,
	awards,
	released,
	type,
	addWatchlist,
	isExistInWatchlist,
}) => {
	const [toggleShow, setToggleShow] = useState(false);

	return (
		<div className="relative flex gap-2 mt-8 text-gray-200 rounded-md">
			<img src={poster} alt="" className="w-full rounded-lg " />
			{toggleShow && (
				<div className="absolute w-full h-full p-4 overflow-y-scroll text-sm bg-black bg-opacity-80">
					<div className="text-center ">
						<h1 className="text-xl font-semibold">{title}</h1>
						<p className="pb-2 border-b border-gray-300">({year})</p>
					</div>
					<ul className="relative flex flex-col gap-3 pb-3 my-3 border-b">
						<li className="font-semibold">{type}</li>

						<li className="flex items-center gap-3">
							<BsClock />
							{runtime}
						</li>
						<li className="flex items-center gap-3">
							<BsFilm />
							{genre}
						</li>
						<li className="flex items-center gap-3">
							<BsFillPeopleFill />
							{actors}
						</li>
						<li className="flex items-center gap-3">
							<BsFillTrophyFill />
							{awards}
						</li>
						<li className="flex items-center gap-3">
							<BsCalendar3 />
							{released}
						</li>
						<p className="absolute top-0 right-0 flex items-center gap-2 p-2 font-semibold text-white bg-gray-700 rounded-md bg-opacity-80">
							<BsStarFill className="text-yellow-400" />
							{imdbRating}
						</p>
					</ul>

					<div>{plot}</div>
				</div>
			)}
			<button
				onClick={() => addWatchlist(imdbID)}
				className="absolute right-0 text-5xl rounded-lg top-2"
			>
				{isExistInWatchlist(imdbID) ? (
					<BsBookmarkCheckFill className="text-green-400" />
				) : (
					<BsBookmarkPlusFill />
				)}
			</button>
			<button
				onClick={() => setToggleShow((prev) => !prev)}
				className="absolute p-2 text-4xl text-white bg-gray-200 rounded-lg shadow-lg bg-opacity-40 left-2 top-2"
			>
				{toggleShow ? <BsChevronUp /> : <BsChevronDown />}
			</button>
			<p className="absolute flex items-center gap-2 p-2 font-semibold text-white bg-gray-700 rounded-md bottom-2 left-2 bg-opacity-80">
				<BsStarFill className="text-yellow-400" />
				{imdbRating}
			</p>
		</div>
	);
};

{
	/* <div
			key={imdbID}
			className="relative flex p-2 mb-4 text-xs tracking-wide text-blue-700 bg-gray-200 rounded-lg shadow-lg"
		>
			<img
				src={poster}
				className="object-cover w-1/3 h-full bg-gray-200 rounded-lg shadow-md "
			></img>
			<div className="w-full ml-4">
				<h1 className="pb-3 mb-2 font-bold text-center border-b border-blue-500 text-md">
					{title} <span className="">({year})</span>
				</h1>
				<div className="flex items-center justify-between gap-2">
					<ul className="">
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
						<li className="pt-2 mt-2 border-t border-gray-400">{plot}</li>
					</ul>
				</div>
			</div>
			<button
				onClick={() => addWatchlist(imdbID)}
				className="px-2 ml-2 text-xl text-blue-500 bg-gray-100 border border-blue-500 rounded-lg"
			>
				+
			</button>
			{isExistInWatchlist(imdbID) && (
				<p className="absolute top-0 flex items-center gap-2 p-2 text-xs text-blue-100 bg-blue-500 rounded-b-lg left-4">
					Listed In Watchlist <BsFillClipboard2CheckFill />
				</p>
			)}
		</div> */
}

export default CardSearch;
