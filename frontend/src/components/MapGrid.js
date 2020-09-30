import React, { useState } from "react"

import Point from "./Point"

function MapGrid(props) {

	function deathFilter(value) {
		if (props.deathValue === "all cases") {
			return true;
		}
		else if (props.deathValue === "0") {
			return (value.num_deaths === 0);
		}
		else if (props.deathValue === "1-10") {
			return (value.num_deaths >= 1 && value.num_deaths <= 10);
		}
		else if (props.deathValue === "11-100") {
			return (value.num_deaths >= 11 && value.num_deaths <= 100);
		}
		else if (props.deathValue === "101-1000") {
			return (value.num_deaths >= 101 && value.num_deaths <= 1000);
		}
		else if (props.deathValue === "1001-10000") {
			return (value.num_deaths >= 1001 && value.num_deaths <= 10000);
		}
		else if (props.deathValue === "bigger than 10000") {
			return (value.num_deaths > 10000);
		}
		else if (props.deathValue === "no data") {
			return (value.num_deaths === null);
		}
	}

	return (
		<main>
			<img
				className="mapGrid"
				src={props.src}	
				alt="World Map"
			/>

			{props.jsonData.filter(filtred => filtred.yyyymmdd.slice(0,4) == props.yearValue)
						   .filter(deathFilter)
					  	   .map(item => 
					  	   		<Point 
					  	  			attributes={item} 
				  	  				setPointId={props.setPointId} 
				  	  				selectedPointId={props.selectedPointId}
				  	  				key={item.id}
				  	  			/>)}
		</main>
	)
}

export default MapGrid