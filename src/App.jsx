import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import SearchMovie from "./components/SearchMovie";
import MyWatchlist from "./components/MyWatchlist";
// import Footer from "./components/Footer";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/search" element={<SearchMovie />} />
				<Route exact path="/my-watchlist" element={<MyWatchlist />} />
			</Routes>
			{/* <Footer /> */}
		</div>
	);
}

export default App;
