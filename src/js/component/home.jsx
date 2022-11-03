import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import The4cards from "./The4cards.jsx";
import Footer from "./footer.jsx";
import Cards from "./cards.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid p-0">
		<Navbar/>
			<div className="container-fluid">
				<div className="container mb-5">
				<Jumbotron />
				</div>
				<div className="container mb-5">
						<The4cards />
				</div>
				</div>
				<div>
				<Footer />
				</div>
			
		</div>
	);
};

export default Home;
