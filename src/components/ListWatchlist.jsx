import React, { useState } from "react";

import PosterModal from "./PosterModal";

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
	BsImage,
} from "react-icons/bs";

import { FaHeart, FaRegHeart } from "react-icons/fa";

const ListWatchlist = ({
	markFavorite,
	markDone,
	deleteMovie,
	movie,
	toggleInfoById,
	toggleInfo,
}) => {
	const [toggleDelete, setToggleDelete] = useState(false);
	const [togglePosterModal, setTogglePosterModal] = useState(false);

	const {
		imdbID,
		Poster,
		Title,
		Year,
		imdbRating,
		Runtime,
		Genre,
		Actors,
		Awards,
		Released,
		Plot,
		Type,
		isDone,
		isFavorite,
	} = movie;

	const isThisMovieInfoOpen = toggleInfo.find(
		(item) => item.imdbID === imdbID
	).isInfoOpen;

	return (
		<div className="text-gray-500 shadow-md rounded-xl">
			<div className="flex items-center justify-between p-2 bg-gray-100 rounded-t-lg">
				<h1 className="w-1/2">{Title}</h1>
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
			{isThisMovieInfoOpen && (
				<div className="relative p-2 text-sm bg-gray-100 bg-opacity-60">
					<h1 className="mb-2 ml-4 text-base font-semibold">
						{Title} <span className="text-xs">({Year})</span>
					</h1>
					<ul className="flex flex-col gap-1">
						<li>{Type}</li>
						<li className="flex items-center gap-2">
							<BsClock />
							{Runtime}
						</li>
						<li className="flex items-center gap-2">
							<BsFilm />
							{Genre}
						</li>
						<li className="flex items-center gap-2">
							<BsFillPeopleFill />
							{Actors}
						</li>
						<li className="flex items-center gap-2">
							<BsFillTrophyFill />
							{Awards}
						</li>
						<li className="flex items-center gap-2">
							<BsCalendar3 />
							{Released}
						</li>
						<li className="my-2 border-b"></li>
						<li className="flex items-center gap-2">{Plot}</li>
					</ul>
					<div className="absolute right-2 top-2">
						<p className="flex items-center gap-1 p-1 mb-2 text-sm text-white bg-gray-500 rounded-md">
							<BsStarFill className="text-yellow-300" />
							{imdbRating}
						</p>
						<p
							onClick={() => setTogglePosterModal(true)}
							className="flex items-center justify-center w-10 h-10 text-xl text-gray-300 bg-white rounded-full"
						>
							<BsImage />
						</p>
					</div>
				</div>
			)}
			<div
				onClick={() => toggleInfoById(imdbID)}
				className="flex justify-center py-1 bg-gray-100 bg-opacity-10"
			>
				{toggleInfo ? <BsChevronUp /> : <BsChevronDown />}
			</div>
			{togglePosterModal && (
				<PosterModal
					setTogglePosterModal={setTogglePosterModal}
					poster={Poster}
				/>
			)}
		</div>
	);
};

export default ListWatchlist;
