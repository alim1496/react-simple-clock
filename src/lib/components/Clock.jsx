import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./clock.css"
import HourMark from "./HourMark"
import Hand from "./Hand"

const Clock = (props) => {
	const { hourValue, minuteValue, size = 200, borderColor = "#000", borderWidth = 5, hourFormat, live } = props
	const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
	const romans = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"]

	const [hour, setHour] = useState(0)
	const [minute, setMinute] = useState(0)
	const [second, setSecond] = useState(0)

	useEffect(() => {
		if (live) {
			const interval = setInterval(() => {
				const date = new Date()
				const hh = date.getHours()
				const mm = date.getMinutes()
				const ss = date.getSeconds()
				setHour(hh)
				setMinute(mm)
				setSecond(ss)
			}, 1000)
			return () => clearInterval(interval)
		} else {
			setMinute(minuteValue)
			setHour(hourValue)
		}
	}, [live, minuteValue, hourValue])

	return (
		<div style={{ width: size, height: size, borderColor, borderWidth }} className="rac-clock-body">
			{hours.map((hour, index) => (
				<HourMark
					key={index} 
					value={hourFormat === "number" ? hour : romans[hour]} 
					angle={hour * 30} 
					format={hourFormat} 
				/>
			))}
			<div className="rac-hand-wrapper" style={{ width: size, height: size/2 }}>
				{live && <Hand height={4*size/10} handID="rac-second-hand" angle={second*6} />}
				<Hand height={3*size/10} handID="rac-minute-hand" angle={minute*6+second/10} />
				<Hand height={size/5} handID="rac-hour-hand" angle={hour*30+minute/2} />
			</div>
		</div>
	)
}

Clock.propTypes = {
	hourValue: PropTypes.number,
	minuteValue: PropTypes.number,
	size: PropTypes.number,
	borderColor: PropTypes.string,
	borderWidth: PropTypes.number,
	hourFormat: PropTypes.string,
	live: PropTypes.bool
}

export default Clock