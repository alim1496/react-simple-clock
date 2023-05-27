import React from "react"
import PropTypes from "prop-types"

const HourMark = ({ angle, value, format, _mode }) => {
	let mark
	if (format === "number") {
		mark = <div style={{ transform: `rotate(${-angle}deg)` }}><b>{value}</b></div>
	} else if (format === "roman") {
		mark = <div><b>{value}</b></div>
	} else {
		mark = <div style={{ width: 5, height: 20, backgroundColor: _mode === "light" ? "#121214" : "#DCDDDE", display: "inline-block" }}></div>
	}

	return (
		<div style={{ transform: `rotate(${angle}deg)` }} className={`rac-hour-body col-${_mode}`}>
			{mark}
		</div>
	)
}

HourMark.propTypes = {
	angle: PropTypes.number,
	value: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.string
	]),
	format: PropTypes.string,
	_mode: PropTypes.string
}

export default HourMark
