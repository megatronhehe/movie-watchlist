import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [selectedTab, setSelectedTab] = useState("");

	const selectTab = (tab) => {
		setSelectedTab(tab);
	};

	return (
		<div className="bg-blue-500 text-blue-100 text-center w-screen rounded-b-xl ">
			<h1 className="py-8 tracking-widest text-xl">MeWatchThings</h1>
			<div className="flex justify-center text-xs tracking-wide">
				<ul className=" flex justify-between items-center max-w-lg w-full px-4">
					<Link to="/" onClick={() => selectTab("home")}>
						<li
							className={`px-3 py-2 rounded-t-lg ${
								selectedTab === "home" && "bg-white text-blue-500"
							}`}
						>
							Home
						</li>
					</Link>
					<Link to="/search" onClick={() => selectTab("search")}>
						<li
							className={`px-3 py-2 rounded-t-lg ${
								selectedTab === "search" && "bg-white text-blue-500"
							}`}
						>
							Search Movie
						</li>
					</Link>
					<Link to="/my-watchlist" onClick={() => selectTab("watchlist")}>
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
