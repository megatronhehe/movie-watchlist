import React, { useState } from "react";

import {
	BsStarFill,
	BsClock,
	BsFilm,
	BsFillPeopleFill,
	BsFillTrophyFill,
	BsCalendar3,
	BsChevronDown,
	BsChevronUp,
	BsFillTrashFill,
	BsEyeFill,
	BsCheckCircleFill,
	BsXCircleFill,
} from "react-icons/bs";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const ListWatchlist = ({
	imdbID,
	title,
	isDone,
	isFavorite,
	markFavorite,
	markDone,
	deleteMovie,
	year,
	imdbRating,
	type,
	runtime,
	genre,
	actors,
	awards,
	released,
	plot,
}) => {
	const [toggleDelete, setToggleDelete] = useState(false);
	const [toggleInfo, setToggleInfo] = useState(false);

	return (
		<div className="shadow-md">
			<div className="flex items-center justify-between p-2 text-gray-500 bg-gray-100 rounded-t-lg">
				<h1 className="w-1/2">{title}</h1>
				<div className="flex justify-end w-1/2 gap-2">
					<div className="flex gap-2">
						{toggleDelete && (
							<button
								onClick={() => deleteMovie(imdbID)}
								className="p-2 text-gray-100 bg-red-300 rounded-full"
							>
								<BsCheckCircleFill />
							</button>
						)}
						<button
							onClick={() => setToggleDelete((prev) => !prev)}
							className={`p-2 text-gray-100  rounded-full ${
								toggleDelete ? "bg-gray-300" : "bg-red-300"
							}`}
						>
							{toggleDelete ? <BsXCircleFill /> : <BsFillTrashFill />}
						</button>
					</div>
					<div className="mx-2 border-r border-gray-300"></div>
					<button
						onClick={() => markFavorite(imdbID)}
						className="p-2 text-red-400 bg-white rounded-full"
					>
						{isFavorite ? <FaHeart /> : <FaRegHeart />}
					</button>
					<button
						onClick={() => markDone(imdbID)}
						className={`p-2 rounded-full ${
							isDone ? "bg-green-400 text-white" : "bg-white text-gray-400"
						}`}
					>
						{isDone ? <BsCheckCircleFill /> : <BsEyeFill />}
					</button>
				</div>
			</div>
			{toggleInfo && (
				<div className="relative p-2 text-sm bg-gray-100 bg-opacity-60">
					<h1 className="mb-2 ml-4 text-base font-semibold">
						{title} <span className="text-xs">({year})</span>
					</h1>
					<ul className="flex flex-col gap-1">
						<li>{type}</li>
						<li className="flex items-center gap-2">
							<BsClock />
							{runtime}
						</li>
						<li className="flex items-center gap-2">
							<BsFilm />
							{genre}
						</li>
						<li className="flex items-center gap-2">
							<BsFillPeopleFill />
							{actors}
						</li>
						<li className="flex items-center gap-2">
							<BsFillTrophyFill />
							{awards}
						</li>
						<li className="flex items-center gap-2">
							<BsCalendar3 />
							{released}
						</li>
						<li className="my-2 border-b"></li>
						<li className="flex items-center gap-2">{plot}</li>
					</ul>
					<p className="absolute flex items-center gap-1 p-1 text-sm text-white bg-gray-500 rounded-md right-2 top-2">
						<BsStarFill className="text-yellow-300" />
						{imdbRating}
					</p>
				</div>
			)}
			<div
				onClick={() => setToggleInfo((prev) => !prev)}
				className="flex justify-center py-1 bg-gray-100 bg-opacity-10"
			>
				{toggleInfo ? <BsChevronUp /> : <BsChevronDown />}
			</div>
		</div>
	);
};

export default ListWatchlist;