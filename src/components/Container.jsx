import React from "react";

const Container = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-2xl">{children}</div>
		</div>
	);
};

export default Container;
