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
}) => {
	const [toggleDelete, setToggleDelete] = useState(false);

	return (
		<div className="flex items-center justify-between p-2 text-gray-500 bg-gray-100 rounded-lg">
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
	);
};

export default ListWatchlist;
