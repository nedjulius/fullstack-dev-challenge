import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const CurrencyInput = ({ defaultValue, update }) => {
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		update(value);
	}, [value]);

	const handleChange = (e) => setValue(e.target.value);
	return (
		<div className={`currency-input ${defaultValue !== undefined ? 'default-value' : ''}`}>
			<span>£</span>
			<input type="number"
				min={0}
				value={value}
				onChange={handleChange} />
		</div>
	)
}

CurrencyInput.propTypes = {
	defaultValue: PropTypes.number
}

export default CurrencyInput;