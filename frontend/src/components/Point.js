import React, { useState } from "react"

import { addColorClass, makeStyle } from "../utils"

function Point(props) {

	const {date, focal, id, latitude, longitude, magnitude, mill_damages, name,
	       num_deaths, num_houses_dam, num_houses_dest, num_injured, tsu, x, y,
	       yyyymmdd} = props.attributes;

	return(
		<i
			className={`icon-spin1 animate-spin point 
					   ${addColorClass(magnitude, "color")} 
					   ${props.selectedPointId === id ? "highlightPoint" : ""}`}
			style={makeStyle(x, y)}
			date={date}
			focal={focal}
			id={id}
			latitude={latitude}
			longitude={longitude}
			magnitude={magnitude}
			mill_damages={mill_damages}
			name={name}
			num_deaths={num_deaths}
			num_houses_dam={num_houses_dam}
			num_houses_dest={num_houses_dest}
			num_injured={num_injured}
			tsu={tsu}
			x={x}
			y={y}
			yyyymmdd={yyyymmdd}
			onClick={() => props.setPointId(id)}
		>
		</i>
	)
	
}

export default Point