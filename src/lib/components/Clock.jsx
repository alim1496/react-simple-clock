import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import "./clock.css"
import HourMark from "./HourMark"
import Hand from "./Hand"

const Clock = (props) => {
	const { hourValue, minuteValue, size = 200, hourMarkFormat, live, className, mode = "light" } = props
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
		<div style={{ width: size, height: size }} className={`rac-clock-body ${className}`}>
			{hours.map((hour, index) => (
				<HourMark
					key={index} 
					value={hourMarkFormat === "number" ? hour : romans[hour]} 
					angle={hour * 30} 
					format={hourMarkFormat}
					_mode={mode}
				/>
			))}
			<div className="rac-hand-wrapper" style={{ width: size, height: size/2 }}>
				<div className={`rac-mid-point bg-${mode}`} style={{ height: size/20, width: size/20, transform: `translateY(${size/40}px)` }}></div>
				{live && <Hand height={3.5*size/10} width={2} angle={second*6} _mode={mode} />}
				<Hand height={3*size/10} width={4} angle={minute*6+second/10} _mode={mode} />
				<Hand height={size/5} angle={hour*30+minute/2} _mode={mode} />
			</div>
		</div>
	)
}

Clock.propTypes = {
	hourValue: PropTypes.number,
	minuteValue: PropTypes.number,
	size: PropTypes.number,
	hourMarkFormat: PropTypes.string,
	className: PropTypes.string,
	live: PropTypes.bool,
	mode: PropTypes.string
}

export default Clock