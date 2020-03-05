import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import './SliderInput.css'

const SliderInput = ({ defaultValue, update }) => {
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		update(value);
	}, [value]);

	const handleChange = (e) => setValue(e.target.value);
	return (
		<div className="fmz-slider">
			<p>{value}%</p>
			<input type="range"
				value={value}
				min={0}
				max={10}
				step={0.25}
				onChange={handleChange}/>
		</div>
	)
}

SliderInput.propTypes = {
	defaultValue: PropTypes.number
}

export default SliderInput;
