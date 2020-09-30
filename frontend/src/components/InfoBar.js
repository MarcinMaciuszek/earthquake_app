import React from "react"

import { addColorClass, prepareDate, prepareCountry, prepareRegion, prepareLongitude, prepareLatitude,
		 prepareMagnitude, prepareMillions, prepareDeaths, prepareInjured, prepareDamagedHouses,
		 prepareDestroyedHouses, prepareFocal, prepareTsu } from "../utils"

function InfoBar(props) {

	const point = props.jsonData.find(point => point.id === props.selectedPointId);

	return(
		<nav>
			<div id="detailsBar" className={point ? addColorClass(point.magnitude, "background") : ""}>
			<h1>Earthquake details:</h1>
				<table>
					<tbody>
						<tr>
							<th>Country:</th>
							<td>{prepareCountry(point)}</td>
						</tr>
						<tr className="region">
							<th>Region:</th>
							<td className="regionCell">{prepareRegion(point)}</td>
						</tr>
						<tr>
							<th>Longitude (Y):</th>
							<td>{prepareLongitude(point)}</td>
								
						</tr>
						<tr>
							<th>Latitude (X):</th>
							<td>{prepareLatitude(point)}</td>
						</tr>
						<tr>
							<th>Date:</th>
							<td>{prepareDate(point)}</td>
						</tr>
						<tr>
							<th>Magnitude:</th>
							<td>{prepareMagnitude(point)}</td>
						</tr>
						<tr>
							<th>Focal:</th>
							<td>{prepareFocal(point)}</td>
						</tr>
						<tr>
							<th>Number of deaths:</th>
							<td>{prepareDeaths(point)}</td> 
						</tr>
						<tr>
							<th>Number of injured:</th>
							<td>{prepareInjured(point)}</td>
						</tr>
						<tr>
							<th>Damaged houses:</th>
							<td>{prepareDamagedHouses(point)}</td>
						</tr>
						<tr>
							<th>Destroyed houses:</th>
							<td>{prepareDestroyedHouses(point)}</td>
						</tr>
						<tr>
							<th>Material losses:</th>
							<td>{prepareMillions(point)}</td>
						</tr>
						<tr>
							<th>Tsunami:</th>
							<td>{prepareTsu(point)}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div id="richterBar">
				<h1>Richter magnitude scale:</h1>
				<table>
					<tbody>
						<tr className="microBar">
							<th>1.0-1.9</th>
							<td>Micro</td>
						</tr>
						<tr className="minorBar">
							<th>2.0-3.9</th>
							<td>Minor</td>
						</tr>
						<tr className="lightBar">
							<th>4.0-4.9</th>
							<td>Light</td>
						</tr>
						<tr className="moderateBar">
							<th>5.0-5.9</th>
							<td>Moderate</td>
						</tr>
						<tr className="strongBar">
							<th>6.0-6.9</th>
							<td>Strong</td>
						</tr>
						<tr className="majorBar">
							<th>7.0-7.9</th>
							<td>Major</td>
						</tr>
						<tr className="greatBar">
							<th>Above 8.0</th>
							<td>Great</td>
						</tr>
					</tbody>
				</table>
			</div>
		</nav>
	)
}

export default InfoBar