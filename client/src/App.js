import React from 'react';
import CurrencyInput from './components/CurrencyInput'
import SliderInput from './components/SliderInput'
import DisplayGraph from './components/DisplayGraph'
import FrequencyInput from './components/FrequencyInput'
import './App.css';
import useCalculate from './hooks/use_calculate'


const App = () => {
	const [setFrequency, setInit, setMonthly, setRate, loading, data] = useCalculate();
	console.log(loading);
	return (
		<div className="App">
			<div className="header-banner">
				<h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
			</div>
			<div className="financial-inputs">
				<p className="input-label">How much have you saved?</p>
				<CurrencyInput defaultValue={0} update={setInit}/>

				<p className="input-label">How much will you save each month?</p>
				<CurrencyInput defaultValue={0} update={setMonthly}/>

				<p className="input-label">How much interest will you earn per year?</p>
				<SliderInput defaultValue={4} update={setRate}/>

				<FrequencyInput defaultValue={"monthly"} update={setFrequency} />
			</div>
			<div className="financial-display">
				{/*We have included some sample data here, you will need to replace this
				with your own. Feel free to change the data structure if you wish.*/}
				<DisplayGraph data={data}/>
			</div>
		</div>
	);
}

export default App;
