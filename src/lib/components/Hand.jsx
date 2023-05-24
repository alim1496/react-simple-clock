import React, { useEffect } from "react"
import PropTypes from "prop-types"

const Hand = ({ height, width = 5, handID, angle }) => {
	useEffect(() => {
		(document.getElementById(handID)).style.transform = `rotate(${angle}deg)`
	}, [angle])

	return (
		<div style={{ height, width }} id={handID} className="rac-clock-hand">

		</div>
	)
}

Hand.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	angle: PropTypes.number,
	handID: PropTypes.string
}

export default Hand
