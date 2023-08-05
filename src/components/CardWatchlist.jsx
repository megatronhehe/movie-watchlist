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

const CardWatchlist = ({ markFavorite, movie, markDone, deleteMovie }) => {
	const [toggleShow, setToggleShow] = useState(false);
	const [toggleDelete, setToggleDelete] = useState(false);

	const {
		imdbID,
		Poster,
		Title,
		Year,
		imdbRating,
		Runtime,
		Genre,
		Actors,
		Plot,
		Awards,
		Released,
		Type,
		isDone,
		isFavorite,
	} = movie;

	return (
		<div className="relative flex gap-2 overflow-hidden text-gray-200 rounded-xl">
			<img src={Poster} alt="" className="w-full " />
			{toggleShow && (
				<div className="absolute w-full h-full p-4 overflow-auto text-sm bg-black bg-opacity-80">
					<div className="text-center ">
						<h1 className="text-xl font-semibold">{Title}</h1>
						<p className="pb-2 border-b border-gray-300">({Year})</p>
					</div>
					<ul className="relative flex flex-col gap-3 pb-3 my-3 border-b">
						<li className="font-semibold">{Type}</li>

						<li className="flex items-center gap-3">
							<BsClock />
							{Runtime}
						</li>
						<li className="flex items-center gap-3">
							<BsFilm />
							{Genre}
						</li>
						<li className="flex items-center gap-3">
							<BsFillPeopleFill />
							{Actors}
						</li>
						<li className="flex items-center gap-3">
							<BsFillTrophyFill />
							{Awards}
						</li>
						<li className="flex items-center gap-3">
							<BsCalendar3 />
							{Released}
						</li>
						<p className="absolute top-0 right-0 flex items-center gap-2 p-2 font-semibold text-white bg-gray-700 rounded-md bg-opacity-80">
							<BsStarFill className="text-yellow-400" />
							{imdbRating}
						</p>
					</ul>

					<div>{Plot}</div>
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
					<p className="px-4 py-2 text-sm bg-black rounded-full">{Type}</p>
				</div>
			)}
		</div>
	);
};

export default CardWatchlist;
