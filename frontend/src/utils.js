import React from "react"

const emptyField = <p style={{color:"#34363b", margin: 0}}>No data</p>;

export const addColorClass = (magnitude, option) => {
	if (magnitude < 2) {
		return option === "color" ? "microPoint" : "microBar";
	}
	else if (magnitude < 4) {
		return option ===  "color" ? "minorPoint" : "minorBar";
	}
	else if (magnitude < 5) {
		return option ===  "color" ? "lightPoint" : "lightBar";
	}
	else if (magnitude < 6) {
		return option ===  "color" ? "moderatePoint" : "moderateBar";
	}
	else if (magnitude < 7) {
		return option ===  "color" ? "strongPoint" : "strongBar";
	}
	else if (magnitude < 8) {
		return option ===  "color" ? "majorPoint" : "majorBar";
	}
	else if (magnitude >= 8) {
		return option ===  "color" ? "greatPoint" : "greatBar";
	}
}

export const makeStyle = (x, y) => {
	const left = ((180 + x) * 100 / 360) >= 98 ? 98 : ((180 + x) * 100 / 360);
	const top = (90 - y) * 100 / 180;

	return ({
			left: `${left}%`,
			top: `${top}%`
	})
}

export const prepareCountry = (point) => {
	return point ? point.name.split(";").map(item => item.split(":")[0]).filter(Boolean).join(", ").trim() : emptyField;
}

export const prepareRegion = (point) => {
	return point ? point.name.split(";").map(item => item.split(":")[1]).filter(Boolean).join(", ").trim() : emptyField;
}

export const prepareDate = (point) => {
	return point ? `${point.yyyymmdd.slice(6,8)}.${point.yyyymmdd.slice(4,6)}.${point.yyyymmdd.slice(0,4)}` : emptyField;
}

export const prepareLongitude = (point) => {
	return point ? (point.y !== null ? (point.y > 0 ? `${Number(point.y).toFixed(3)} N` : `${Number(Math.abs(Number(point.y))).toFixed(3)} S`) : emptyField) : emptyField;
}

export const prepareLatitude = (point) => {
	return point ? (point.x !== null ? (point.x > 0 ? `${Number(point.x).toFixed(3)} E` : `${Number(Math.abs(Number(point.y))).toFixed(3)} W`) : emptyField) : emptyField;
}

export const prepareMagnitude = (point) => {
	return point ? (point.magnitude !== null ? Number((point.magnitude).toFixed(2)) : emptyField) : emptyField;
}

export const prepareMillions = (point) => {
	return point ? (point.mill_damages !== null ? (Number(point.mill_damages) > 2 ? `$${Number((point.mill_damages).toFixed(2))} millions` : `$${Number((point.mill_damages).toFixed(2))} million`) : emptyField) : emptyField;
}

export const prepareDeaths = (point) => {
	return point ? (point.num_deaths !== null ? point.num_deaths: emptyField) : emptyField;
}

export const prepareInjured = (point) => {
	return point ? (point.num_injured !== null ? point.num_injured : emptyField) : emptyField;
}

export const prepareDamagedHouses = (point) => {
	return point ? (point.num_houses_dam !== null ? point.num_houses_dam : emptyField) : emptyField;
}

export const prepareDestroyedHouses = (point) => {
	return point ? (point.num_houses_dest !== null ? point.num_houses_dest : emptyField) : emptyField;
}

export const prepareFocal = (point) => {
	return point ? (point.focal !== null ? point.focal : emptyField) : emptyField;
}

export const prepareTsu = (point) => {
	return point ? (point.tsu !== null ? "Occured" : "No occured") : emptyField;
}