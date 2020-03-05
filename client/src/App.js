import React from 'react';
import CurrencyInput from './components/CurrencyInput'
import SliderInput from './components/SliderInput'
import DisplayGraph from './components/DisplayGraph'
import FrequencyInput from './components/FrequencyInput'
import './App.css';
import useCalculate from './hooks/use_calculate'


const App = () => {
	const [setFrequency, setInit, setMonthly, setRate, loading, data, earnings] = useCalculate();

	return (
		<React.Fragment>
		<div className="header-banner">
			<h1 className="fmz-white-font">Finimize Interest Rate Calculator</h1>
		</div>
		<div className="App">
				<div className="financial-inputs">
					<div className="input-box">
						<p className="input-label">How much have you saved?</p>
						<CurrencyInput defaultValue={1} update={setInit}/>
					</div>
					<div className="input-box">
						<p className="input-label">How much will you save each month?</p>
						<CurrencyInput defaultValue={1} update={setMonthly}/>
					</div>
					<div className="input-box">
						<p className="input-label">How much interest will you earn per year?</p>
						<SliderInput defaultValue={0.25} update={setRate}/>
					</div>
					<div className="input-box">
						<p className="input-label">How often will your interest be paid?</p>
						<FrequencyInput defaultValue={"monthly"} update={setFrequency} />
					</div>
					<div className="input-box sum">
						In 50 years, you will earn: £{earnings}
					</div>
			</div>
			<div className="financial-display">
				<DisplayGraph data={data} loading={loading}/>
			</div>
		</div>
		</React.Fragment>
	);
}

export default App;
