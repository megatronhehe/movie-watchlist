import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Home = () => {
	const { setSelectedTab } = useContext(Context);

	useEffect(() => setSelectedTab("home"), []);

	return (
		<div className="flex flex-col items-center h-full">
			<div className="max-w-lg w-full shadow-lg pt-8 h-full">
				<section className="h-40 text-blue-500 tracking-wide p-4 mx-5 mb-8 bg-gray-100 h-full rounded-lg shadow-lg">
					<div className="border-b-2">
						<h1 className="text-3xl">
							Keep <span className="font-bold">track</span>
						</h1>
						<p className="my-2 text-blue-500">
							on what you are <span className="font-bold">watching</span>
						</p>
					</div>
					<p className="text-xs mt-3">
						with this app, you can add and remove movies to your personal movie
						list easily!
					</p>
				</section>

				<section className="h-40 text-blue-100 tracking-wide p-4 mx-5 mb-8 bg-blue-500 h-full rounded-lg shadow-lg">
					<div className="border-b-2 text-right">
						<h1 className="text-3xl">Search</h1>
						<p className="mb-2 ">a movie or a show</p>
					</div>
					<div className="flex justify-between items-center">
						<p className="text-xs mt-3 w-1/2">
							type your desired movie title that you want to add to your list!
						</p>
						<Link to="/search">
							<button className="text-sm font-bold text-right bg-blue-100 text-blue-500 px-3 py-1 rounded-lg">
								search now
							</button>
						</Link>
					</div>
				</section>

				<section className="h-32 text-blue-100 tracking-wide p-4 mx-5 mb-8 bg-blue-700 h-full rounded-lg shadow-lg">
					<div className="border-b-2">
						<h1 className="text-3xl mb-2">My Watchlist</h1>
					</div>
					<div className="flex justify-between items-end">
						<Link to="/my-watchlist">
							<button className="text-sm font-bold text-right bg-blue-500 text-blue-100 px-3 py-1 rounded-lg">
								my watchlist
							</button>
						</Link>
						<p className="text-xs mt-3 w-1/2">
							check your personal list of movies here!
						</p>
					</div>
				</section>
			</div>
		</div>
	);
};

export default Home;
