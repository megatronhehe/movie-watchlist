import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
	const { setSelectedTab, selectedTab } = useContext(Context);
	return (
		<div className="bg-blue-500 text-blue-100 text-center w-screen rounded-b-xl ">
			<h1 className="py-8 tracking-widest text-xl">MeWatchThings</h1>
			<div className="flex justify-center text-xs tracking-wide">
				<ul className=" flex justify-between items-center max-w-lg w-full px-4">
					<Link to="/">
						<li
							className={`px-3 py-2 rounded-t-lg ${
								selectedTab === "home" && "bg-white text-blue-500"
							}`}
						>
							Home
						</li>
					</Link>
					<Link to="/search">
						<li
							className={`px-3 py-2 rounded-t-lg ${
								selectedTab === "search" && "bg-white text-blue-500"
							}`}
						>
							Search Movie
						</li>
					</Link>
					<Link to="/my-watchlist">
						<li
							className={`px-3 py-2 rounded-t-lg ${
								selectedTab === "watchlist" && "bg-white text-blue-500"
							}`}
						>
							My Watchlist
						</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Header;
