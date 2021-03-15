import React, { Component } from "react";

class WeatherWidget extends Component {
  render() {
    return (
      <div>
        <p>{this.props.day}</p>
        <img
          src={this.props.type}
          alt={`${this.props.type} icon`}
        ></img>
        <p className="tempratues">
          <span className="maxtemp">{this.props.maxTemperature}</span>
          <span className="mintemp">{this.props.minTemperature}</span>
        </p>
      </div>
    );
  }
}

export default WeatherWidget;
