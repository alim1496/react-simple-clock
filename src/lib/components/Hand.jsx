import React, { useEffect, useRef } from "react"
import PropTypes from "prop-types"

const Hand = ({ height, width = 5, angle, _mode }) => {
	const handRef = useRef()

	useEffect(() => {
		try {
			handRef.current.style.transform = `rotate(${angle}deg)`
		} catch (e) {
			console.error(e)
		}
	}, [angle])

	return (
		<div ref={handRef} style={{ height, width }} className={`rac-clock-hand bg-${_mode}`}></div>
	)
}

Hand.propTypes = {
	height: PropTypes.number,
	width: PropTypes.number,
	angle: PropTypes.number,
	_mode: PropTypes.string
}

export default Hand
