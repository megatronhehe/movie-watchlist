import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";

const Header = () => {
	const { setSelectedTab, selectedTab } = useContext(Context);
	return (
		<div className="flex flex-col items-center w-full text-sm text-blue-100 bg-blue-500 rounded-b-xl">
			<h1 className="py-8 text-xl tracking-widest text-center">
				MeWatchThings
			</h1>
			<ul className="flex justify-between w-full max-w-2xl ">
				<NavLink to="/">
					<li
						className={`px-3 py-2 rounded-t-lg ${
							selectedTab === "home" && "bg-white text-blue-500"
						}`}
					>
						Home
					</li>
				</NavLink>
				<NavLink to="/search">
					<li
						className={`px-3 py-2 rounded-t-lg ${
							selectedTab === "search" && "bg-white text-blue-500"
						}`}
					>
						Search Movie
					</li>
				</NavLink>
				<NavLink to="/my-watchlist">
					<li
						className={`px-3 py-2 rounded-t-lg ${
							selectedTab === "watchlist" && "bg-white text-blue-500"
						}`}
					>
						My Watchlist
					</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Header;
