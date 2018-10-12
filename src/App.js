import React from 'react';
import Form from "./components/Form";
import Weather from "./components/Weather";
import Forecast from "./components/Forecast";
import {API_KEY, temp} from "./config.js";

class App extends React.Component {
    state = {
        city: undefined,
        temperature: undefined,
        pressure: undefined,
        humidity: undefined,
        description:undefined,
        
        day1: undefined,
        month1:undefined,
        temperature1: undefined,
        pressure1: undefined,
        humidity1: undefined,
        description1:undefined,
        
        day2: undefined,
        month2:undefined,
        temperature2: undefined,
        pressure2: undefined,
        humidity2: undefined,
        description2:undefined,
        
        day3: undefined,
        month3:undefined,
        temperature3: undefined,
        pressure3: undefined,
        humidity3: undefined,
        description3:undefined,
        
        day4: undefined,
        month4:undefined,
        temperature4: undefined,
        pressure4: undefined,
        humidity4: undefined,
        description4:undefined,
        
        day5: undefined,
        month5:undefined,
        temperature5: undefined,
        pressure5: undefined,
        humidity5: undefined,
        description5:undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        
        const city = e.target.elements.city.value;
        
        const apiWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)    
        const dataWeather = await apiWeather.json();        
        console.log(dataWeather);
        
        const apiForecast = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`)
        const dataForecast = await apiForecast.json();
        
       
        const listForecast = dataForecast.list;
        const middayForecast = [];
        
        for(let i =0; i <listForecast.length; i++) {                
            
            const item = listForecast[i].dt;    
            const hour = (new Date(item*1000)).getHours()-2;
            
            if (hour === 12) {
                middayForecast.push(listForecast[i]);
            };
        };
        
        const day = function(item) {  return (new Date((item.dt)*1000)).getDate(); };
        const month = function(item) { return (new Date((middayForecast[0].dt)*1000)).getMonth()+1; }
        
        const press = function(item) { return Math.round(item.main.pressure); };
        const hum = function(item) { return item.main.humidity; };    
        const desc = function(item) { return item.weather[0].description; };
            
        const firstDay = middayForecast[0];    
        const secondDay = middayForecast[1]; 
        const thirdDay = middayForecast[2];  
        const fourthDay =  middayForecast[3];
        const fifthDay =  middayForecast[4];
        
        this.setState({
                city: dataWeather.name,
                temperature: temp(dataWeather),
                pressure: press(dataWeather),
                humidity: hum(dataWeather),
                description:desc(dataWeather),
           
                day1:day(firstDay),
                month1:month(firstDay),
                temperature1:temp(firstDay),
                pressure1: press(firstDay),
                humidity1: hum(firstDay),
                description1:desc(firstDay),
            
                day2:day(secondDay),
                month2:month(secondDay),
                temperature2:temp(secondDay),
                pressure2: press(secondDay),
                humidity2: hum(secondDay),
                description2:desc(secondDay),
            
                day3:day(thirdDay),
                month3:month(thirdDay),
                temperature3:temp(thirdDay),
                pressure3: press(thirdDay),
                humidity3: hum(thirdDay),
                description3:desc(thirdDay),
            
                day4:day(fourthDay),
                month4:month(fourthDay),
                temperature4:temp(fourthDay),
                pressure4: press(fourthDay),
                humidity4: hum(fourthDay),
                description4:desc(fourthDay),
            
                day5:day(fifthDay),
                month5:month(fifthDay),
                temperature5:temp(fifthDay),
                pressure5: press(fifthDay),
                humidity5: hum(fifthDay),
                description5:desc(fifthDay),
            });
     
    }
        
    render() {
        return (
            <div>
                <Form getWeather={this.getWeather}/>
                <Weather 
                    city={this.state.city}
                    temperature={this.state.temperature}
                    pressure={this.state.pressure}
                    humidity={this.state.humidity}
                    description={this.state.description}
                />        
                <Forecast
                    day1={this.state.day1}
                    month1={this.state.month1}
                    temperature1={this.state.temperature1}
                    pressure1={this.state.pressure1}
                    humidity1={this.state.humidity1}
                    description1={this.state.description1}
            
                    day2={this.state.day2}
                    month2={this.state.month2}
                    temperature2={this.state.temperature2}
                    pressure2={this.state.pressure2}
                    humidity2={this.state.humidity2}
                    description2={this.state.description2}
            
                    day3={this.state.day3}
                    month3={this.state.month3}
                    temperature3={this.state.temperature3}
                    pressure3={this.state.pressure3}
                    humidity3={this.state.humidity3}
                    description3={this.state.description3}
            
                    day4={this.state.day4}
                    month4={this.state.month4}
                    temperature4={this.state.temperature4}
                    pressure4={this.state.pressure4}
                    humidity4={this.state.humidity4}
                    description4={this.state.description4}
            
                    day5={this.state.day5}
                    month5={this.state.month5}
                    temperature5={this.state.temperature5}
                    pressure5={this.state.pressure5}
                    humidity5={this.state.humidity5}
                    description5={this.state.description5}
                />    
                
            </div>
        )
    }
}

export default App;