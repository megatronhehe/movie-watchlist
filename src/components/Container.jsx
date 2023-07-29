import React from "react";

const Container = ({ children }) => {
	return (
		<div className="flex justify-center">
			<div className="w-full max-w-2xl p-2">{children}</div>
		</div>
	);
};

export default Container;
