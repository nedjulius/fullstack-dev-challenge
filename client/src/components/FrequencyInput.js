import React from 'react'
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

const FrequencyInput = ({ defaultValue, update }) => {
	const [value, setValue] = useState(defaultValue);
	useEffect(() => {
		update(value);
	}, [value]);

	const handleChange = (e) => setValue(e.target.value);
	return (
    <select onChange={handleChange} default={defaultValue}>
      <option value={"monthly"}>Monthly</option>
      <option value={"quarterly"}>Quarterly</option>
      <option value={"annually"}>Annually</option>
    </select>
	)
}

FrequencyInput.propTypes = {
	defaultValue: PropTypes.string
}

export default FrequencyInput;