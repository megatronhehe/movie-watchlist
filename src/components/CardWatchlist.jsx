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

const CardWatchlist = ({
	imdbID,
	poster,
	title,
	year,
	imdbRating,
	runtime,
	genre,
	actors,
	plot,
	awards,
	released,
	type,
	isDone,
	isFavorite,
	markFavorite,
	markDone,
	deleteMovie,
}) => {
	const [toggleShow, setToggleShow] = useState(false);
	const [toggleDelete, setToggleDelete] = useState(false);

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
				onClick={() => setToggleShow((prev) => !prev)}
				className="absolute p-2 text-4xl text-white bg-gray-200 rounded-lg shadow-lg bg-opacity-40 left-2 top-2"
			>
				{toggleShow ? <BsChevronUp /> : <BsChevronDown />}
			</button>

			{!toggleShow && (
				<div className="absolute flex flex-col items-end gap-4 text-4xl top-2 right-2">
					<div className="flex flex-row-reverse gap-4 bg-gray-700 rounded-full bg-opacity-80">
						<button
							onClick={() => setToggleDelete((prev) => !prev)}
							className={`flex items-center justify-center text-gray-700  rounded-full w-14 h-14 bg-opacity-80 ${
								toggleDelete ? "bg-gray-200" : "bg-red-400"
							}`}
						>
							{toggleDelete ? <BsXCircleFill /> : <BsFillTrashFill />}
						</button>
						{toggleDelete && (
							<button
								onClick={() => deleteMovie(imdbID)}
								className="flex items-center justify-center text-gray-700 bg-red-400 rounded-full w-14 h-14 bg-opacity-80"
							>
								<BsCheckCircleFill />
							</button>
						)}
					</div>
					<button
						onClick={() => markFavorite(imdbID)}
						className="flex items-center justify-center text-red-400 bg-gray-700 rounded-full w-14 h-14 bg-opacity-80"
					>
						{isFavorite ? <FaHeart /> : <FaRegHeart />}
					</button>
					<button
						onClick={() => markDone(imdbID)}
						className={`flex items-center justify-center   rounded-full w-14 h-14 bg-opacity-80 ${
							isDone ? "bg-green-400" : "bg-gray-700"
						}`}
					>
						{isDone ? <BsCheckCircleFill /> : <BsEyeFill />}
					</button>
				</div>
			)}

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

{
	/* <div className="relative p-2 mx-5 mb-4 text-xs tracking-wide text-blue-700 bg-gray-200 rounded-lg shadow-lg">
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
							<li className="pt-2 mt-2 border-t border-gray-400">{plot}</li>
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
		</div> */
}

export default CardWatchlist;
