import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    // weather 데이터의 생김새
    // weather: 
    // [ city: {name: 'aaa'} 
    //   list: [
    //         {main: {tamp: 000, humidity: 00, pressure: 00}}
    //         {main: {tamp: 000, humidity: 00, pressure: 00}}
    //         {main: {tamp: 000, humidity: 00, pressure: 00}}
    //         {main: {tamp: 000, humidity: 00, pressure: 00}}
    //   ]
    //  ]
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    // const lat = cityData.city.coord.lat;

    return (
      // 아래 <td></td> 안에 Sparklines 차트를 재사용하기 위해서 Chart 컴포넌트로 따로 제작한다.
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressure} color="green" units="hPa" /></td>
        <td><Chart data={humidity} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // ES6 간결하게 {weather: weather}
}

export default connect(mapStateToProps)(WeatherList);