import React, { useState } from "react"
import Clock from "./lib"

const App = () => {
	const [minute, setMinute] = useState(15)
	const [hour, setHour] = useState(1)
	const [live, setLive] = useState(false)

	return (
		<div className="container">
			<label>Hour</label>
			<input type="number" min={1} max={12} value={hour} onChange={(e) => setHour(e.target.value)} />
			&nbsp;&nbsp;&nbsp;
			<label>Minute</label>
			<input type="number" min={0} max={59} value={minute} onChange={(e) => setMinute(e.target.value)} />
			&nbsp;&nbsp;&nbsp;
			<input type="checkbox" checked={live} onChange={(e) => setLive(e.target.checked)} />
			<label>live</label>
			<br /><br /><br />
			<Clock hourFormat="number" hourValue={hour} minuteValue={minute} live={live} />
		</div>
	)
}

export default App
