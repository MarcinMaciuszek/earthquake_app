import React, { useState, useEffect } from "react"
import ReactDOM from 'react-dom'

function Header(props) {
	const {yearValue, setYearValue, yearsList,
	       deathValue, setDeathValue, deathsList} = props;

	return (
		<header>
			<h1 id="logo">Earthquake</h1>
			<div id="filters">
				<form> 

					<label className="listLabel" htmlFor="year">Year:
					<select id="year" value={yearValue} onChange={e => setYearValue(e.currentTarget.value)}>
						{yearsList.map(year => <option value={year} key={year}>{year}</option>)}							
					</select>	
					</label>				

					<label className="listLabel" htmlFor="death">Number of Deaths:
					<select id="death" value={deathValue} onChange={e => setDeathValue(e.currentTarget.value)}>
						{deathsList.map(death => <option value={death} key={death}>{death}</option>)}
					</select>
					</label>

				</form>
			</div>				
		</header>
	)
}

export default Header