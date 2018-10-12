import React from "react";
import temp from '../images/temp.png';
import press from '../images/press.png';
import hum from '../images/hum.png';
import {deg} from "../config.js"; /*to change degrees from Celcius to Farenhait*/

class Weather extends React.Component {
    
    render() {
        return(
            <div>   /*if first part of expression is true show html*/
                {this.props.city && <p class="city_name"> {this.props.city}</p> }  
                <div class="weather_container">
                    <div>
                        {this.props.temperature && <p><img src={temp} alt="temperature"/> {this.props.temperature}{'\u00b0'}{deg}</p>}
                        {this.props.pressure && <p><img src={press} alt="pressure" /> {this.props.pressure} hPa</p> }
                        {this.props.humidity && <p><img src={hum} alt="humidity"/> {this.props.humidity}%</p> }
                    </div>
                    <div>
                        {this.props.description && <p class="weather_desc">{this.props.description}</p>}
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Weather;

