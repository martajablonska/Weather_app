import React from 'react';
import temp from '../images/temp.png';
import press from '../images/press.png';
import hum from '../images/hum.png';
import {deg} from "../config.js"; {/*to change degrees from Celcius to Farenhait*/}


class Forecast extends React.Component {
    render() {
        return(
            <div class="forecast">
                <div>
                    {this.props.day1 && <h3>{this.props.day1}.{this.props.month1}</h3>}                         
                    {this.props.temperature1 && <p><img src={temp} alt="temperature"/> {this.props.temperature1}{'\u00b0'}{deg}</p>}
                    {this.props.pressure1 && <p><img src={press} alt="pressure" /> {this.props.pressure1} hPa</p>}
                    {this.props.humidity1 && <p><img src={hum} alt="humidity"/>  {this.props.humidity1}%</p>}
                    {this.props.description1 && <p>{this.props.description1}</p>}
                </div>
                <div>
                    {this.props.day2 && <h3>{this.props.day2}.{this.props.month2}</h3>}
                    {this.props.temperature2 && <p><img src={temp} alt="temperature"/> {this.props.temperature2}{'\u00b0'}{deg}</p>}
                    {this.props.pressure2 && <p><img src={press} alt="pressure" /> {this.props.pressure2} hPa</p>}
                    {this.props.humidity2 && <p><img src={hum} alt="humidity"/>  {this.props.humidity2}%</p>}
                    {this.props.description2 && <p>{this.props.description2}</p>}
                </div>
                <div>
                    {this.props.day3 && <h3>{this.props.day3}.{this.props.month3}</h3>}
                    {this.props.temperature3 && <p><img src={temp} alt="temperature"/> {this.props.temperature3}{'\u00b0'}{deg}</p>}
                    {this.props.pressure3 && <p><img src={press} alt="pressure" /> {this.props.pressure3} hPa</p>}
                    {this.props.humidity3 && <p><img src={hum} alt="humidity"/>  {this.props.humidity3}%</p>}
                    {this.props.description3 && <p>{this.props.description3}</p>}
                </div>
                <div>
                    {this.props.day4 && <h3>{this.props.day4}.{this.props.month4}</h3>}
                    {this.props.temperature4 && <p><img src={temp} alt="temperature"/> {this.props.temperature4}{'\u00b0'}{deg}</p>}
                    {this.props.pressure4 && <p><img src={press} alt="pressure" /> {this.props.pressure4} hPa</p>}
                    {this.props.humidity4 && <p><img src={hum} alt="humidity"/>  {this.props.humidity4}%</p>}
                    {this.props.description4 && <p>{this.props.description4}</p>}
                </div>
                <div>
                    {this.props.day5 && <h3>{this.props.day5}.{this.props.month5}</h3>}
                    {this.props.temperature5 && <p><img src={temp} alt="temperature"/> {this.props.temperature5}{'\u00b0'}{deg}</p>}
                    {this.props.pressure5 && <p><img src={press} alt="pressure" /> {this.props.pressure5} hPa</p>}
                    {this.props.humidity5 && <p><img src={hum} alt="humidity"/> {this.props.humidity5}%</p>}
                    {this.props.description5 && <p>{this.props.description5}</p>}
                </div>
    
            </div>
        );
    }
}

export default Forecast;