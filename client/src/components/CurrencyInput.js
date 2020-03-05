import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import './CurrencyInput.css'

const CurrencyInput = ({ defaultValue, update }) => {
	const [has_focus, setFocus] = useState(false);
	const [value, setValue] = useState(defaultValue);

	useEffect(() => {
		update(value);
	}, [value]);
	
	const handleChange = (e) => setValue(e.target.value);
	const handleFocus = (e) => setFocus(true);
	
	return (
		<div className={`currency-input ${defaultValue !== undefined ? 'default-value' : ''}`}>
			<span>£</span>
			<input type="number"
				value={value}
				onChange={handleChange}
				onFocus={handleFocus}/>
		</div>
	)
}

CurrencyInput.propTypes = {
	defaultValue: PropTypes.number
}

export default CurrencyInput;