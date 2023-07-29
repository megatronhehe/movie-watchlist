import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import { FaSearch, FaBookmark, FaHeart, FaClipboardList } from "react-icons/fa";

const Home = () => {
	const { setSelectedTab } = useContext(Context);

	useEffect(() => setSelectedTab("home"), []);

	return (
		<>
			<section className="p-8 my-8 text-blue-100 bg-blue-500 rounded-lg ">
				<h1 className="text-2xl">MeWatchThings App</h1>
				<p className="mt-8 text-sm">
					Keep track on what movies or shows you have or have not watched yet in
					a easy and simple way.
				</p>
				<Link to="/search">
					<button className="px-3 py-2 mt-8 text-sm font-semibold text-blue-500 bg-white rounded-lg text-end">
						get started!
					</button>
				</Link>
			</section>

			<section className="my-8 text-gray-500 ">
				<h1 className="text-2xl">Features</h1>
				<div className="flex flex-col gap-4 mt-4 sm:flex-wrap sm:flex-row">
					{/*  */}
					<div className="flex flex-col gap-4 sm:flex-row">
						<div className="p-4 text-blue-500 bg-gray-100 rounded-lg sm:w-2/3">
							<h2 className="flex justify-between gap-4 text-2xl font-semibold ">
								Search
								<FaSearch className="text-4xl text-end" />
							</h2>
							<p className="my-4 text-sm">
								Search for every movies or shows that exist in the world.
							</p>
							<Link to="/search">
								<button className="w-full p-1 text-blue-100 bg-blue-500 rounded-lg">
									search now!
								</button>
							</Link>
						</div>

						<div className="p-4 text-white bg-green-400 rounded-lg sm:w-1/3">
							<h2 className="flex justify-between gap-4 text-2xl font-semibold ">
								Mark
								<FaBookmark className="text-4xl " />
							</h2>
							<p className="mt-4 text-sm">
								mark your movies or shows you have or have not watched.
							</p>
						</div>
					</div>

					<div className="flex gap-4 ">
						<div className="relative flex flex-col justify-between w-1/2 p-4 text-white bg-red-300 rounded-lg">
							<h2 className="flex justify-between gap-4 text-lg font-semibold ">
								Favorite
							</h2>
							<FaHeart className="absolute text-2xl top-4 right-4" />
							<p className="mt-4 text-sm">
								tag the movies or shows you watched as, as your personal
								favorite!
							</p>
						</div>
						<div className="relative flex flex-col w-1/2 p-4 text-white bg-blue-300 rounded-lg">
							<h2 className="flex justify-between gap-4 text-lg font-semibold ">
								Personal Collection
							</h2>
							<FaClipboardList className="absolute text-2xl top-4 right-4" />
							<p className="mt-4 text-sm">
								have your personal list of movies or shows collection in a
								single app
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
