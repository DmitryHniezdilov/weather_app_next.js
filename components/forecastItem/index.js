import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ForecastItem = ({icon, temp, time}) => {
    return (
      <div  className ={styles.forecastItem}>
          { time && (
            <div className={styles.forecastItem__text}>
                <span>{time}</span>
                <sup>00</sup>
            </div>
          )}
          <img
            alt = ''
            src = { `http://openweathermap.org/img/wn/${icon}@2x.png` }
          />
          <div className = {styles.forecastItem__text}>
              <span>{temp} &deg;C</span>
          </div>
      </div>
    );
};

ForecastItem.prototype = {
    time: PropTypes.string,
    icon: PropTypes.string,
    temp: PropTypes.number,
};

export default ForecastItem;