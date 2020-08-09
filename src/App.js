import React from 'react';
import { useState } from 'react';

const App = () => {
    const [temperatureValue, setTemperatureValue] = useState(10);
    const increaseTemperature = () => {
        if(temperatureValue<30){
            var newTemperature = temperatureValue + 1;
        }
        else{
            newTemperature=30;
        }
        setTemperatureValue(newTemperature);
        if (newTemperature >= 15) {
            setTemperatureColor('hot');
        }
    };
    const [temperatureColor, setTemperatureColor] = useState('cold');
    const decreaseTemperature = () => {
        if(temperatureValue>-30){
           var newTemperature = temperatureValue - 1;
        }
        else{
            newTemperature=-30;
        }
        setTemperatureValue(newTemperature);
        if (newTemperature < 15) {
            setTemperatureColor('cold');
        }
    };
	return (
		<div className='app-container'>
			<div className='temperature-display-container'>
            <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
			</div>
			<div className='button-container'>
            <button onClick={increaseTemperature}>+</button>
			<button onClick={decreaseTemperature}>-</button>
			</div>
		</div>
	);
};

export default App;