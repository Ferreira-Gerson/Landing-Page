import React from "react";
import Cards from "./cards.jsx";

const The4cards = () =>{
	return (
	<div className="container-fluid d-inline">
		<div className="row">
			<Cards />
			<Cards />
			<Cards />
			<Cards />
		</div>
	</div>
	);
}

export default The4cards;
