import React from 'react';

class Form extends React.Component {
    render() {
        return (
            <div>
                <h1>React Weather Forecast App</h1>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City" required/>
                    <button>Get weather</button>
                </form>
            </div>
        );
    }
}

export default Form;