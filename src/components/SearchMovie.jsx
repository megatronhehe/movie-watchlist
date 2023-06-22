import React, { useState, useEffect } from "react";

const SearchMovie = () => {
	// useEffect(() => {
	// 	fetch("http://www.omdbapi.com/?s=${searchInput.value}&apikey=8217fb31")
	// 		.then((res) => res.json())
	// 		.then((data) => console.log(data))
	// 		.catch((err) => console.log(err));
	// }, []);

	return (
		<div>
			<section className="text-blue-500 tracking-wide p-2 mx-5 mb-8 bg-blue-300 h-full rounded-lg shadow-lg">
				<input
					className="w-full rounded-lg px-4 py-2"
					type="text"
					placeholder="type here to search"
				/>
			</section>
		</div>
	);
};

export default SearchMovie;
