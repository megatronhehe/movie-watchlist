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
		<div className="relative flex gap-2 overflow-hidden text-gray-200 rounded-xl">
			<img src={poster} alt="" className="w-full " />
			{toggleShow && (
				<div className="absolute w-full h-full p-4 overflow-auto text-sm bg-black bg-opacity-80">
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

			{!toggleShow && (
				<div className="absolute bottom-0 flex items-center justify-between w-full p-2">
					<p className="flex items-center gap-2 p-2 text-xl font-semibold text-white bg-gray-700 rounded-md bg-opacity-80">
						<BsStarFill className="text-yellow-400" />
						{imdbRating}
					</p>
					<p className="px-4 py-2 text-sm bg-black rounded-full">{type}</p>
				</div>
			)}
		</div>
	);
};

export default CardSearch;
