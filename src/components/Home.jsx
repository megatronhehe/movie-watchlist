import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import { FaTasks, FaSearch } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";

const Home = () => {
	const { setSelectedTab } = useContext(Context);

	useEffect(() => setSelectedTab("home"), []);

	return (
		<div className="flex flex-col items-center h-full">
			<div className="w-full h-full max-w-lg pt-8 shadow-lg">
				<section className="h-full p-4 mx-5 mb-8 tracking-wide text-blue-500 bg-gray-100 rounded-lg shadow-lg">
					<div className="flex justify-between border-b-2">
						<div>
							<h1 className="text-3xl">
								Keep <span className="font-bold">track</span>
							</h1>
							<p className="my-2 text-blue-500">
								on what you are <span className="font-bold">watching</span>
							</p>
						</div>
						<FaTasks size="60" />
					</div>
					<p className="mt-3 text-xs">
						with this app, you can add and remove movies to your personal movie
						list easily!
					</p>
				</section>

				<section className="h-full p-4 mx-5 mb-8 tracking-wide text-blue-100 bg-blue-500 rounded-lg shadow-lg">
					<div className="flex justify-between text-right border-b-2">
						<FaSearch size="60" />
						<div>
							<h1 className="text-3xl">Search</h1>
							<p className="mb-2 ">a movie or a show</p>
						</div>
					</div>
					<div className="flex items-end justify-between">
						<p className="w-1/2 mt-3 text-xs">
							type your desired movie title that you want to add to your list!
						</p>
						<Link to="/search">
							<button className="px-3 py-1 text-sm font-bold text-right text-blue-500 bg-blue-100 rounded-lg">
								search now
							</button>
						</Link>
					</div>
				</section>

				<section className="h-full p-4 mx-5 mb-8 tracking-wide text-blue-100 bg-blue-700 rounded-lg shadow-lg">
					<div className="flex items-center justify-between border-b-2">
						<h1 className="text-3xl ">My Watchlist</h1>
						<BiSolidMoviePlay size="80" />
					</div>
					<div className="flex items-end justify-between">
						<Link to="/my-watchlist">
							<button className="px-3 py-1 text-sm font-bold text-right text-blue-100 bg-blue-500 rounded-lg">
								my watchlist
							</button>
						</Link>
						<p className="w-1/2 mt-3 text-xs">
							check your personal list of movies here!
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
