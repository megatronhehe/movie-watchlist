import React from "react";
import { Link, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import SearchMovie from "./pages/SearchMovie";
import MyWatchlist from "./pages/MyWatchlist";
import Container from "./components/Container";
// import Footer from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Container>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/search" element={<SearchMovie />} />
					<Route exact path="/my-watchlist" element={<MyWatchlist />} />
				</Routes>
			</Container>
			{/* <Footer /> */}
		</>
	);
}

export default App;
