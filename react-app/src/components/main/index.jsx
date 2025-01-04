import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<ul>
			<Link to="/timer">
				<li>Timer</li>
			</Link>
		</ul>
	);
}

export default Main;