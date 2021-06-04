import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from '../forecastItem';
import styles from './styles.module.scss';

const ForecastTabsPanel = ({activeIndex, data = []}) => {
    const forecastDaily = data.map((item, index) => {
        const time = item.dt_txt.split(/[ :]/)[ 1 ];
        const icon = item.weather[ 0 ].icon;
        const temp = Math.floor(item.main.temp - 273.15);

        return (
            <ForecastItem
                icon = { icon }
                key = { index }
                temp = { temp }
                time = { time }
            />
        );
    });

    return !!data.length && (
        <div
            aria-labelledby = { `scrollable-force-tab-${activeIndex}` }
            className = {styles.forecastTabsPanel}
            id = { `scrollable-force-tabpanel-${activeIndex}` }
            role = 'tabpanel'>
            <div className = {styles.forecastTabsPanel__row}>
                { forecastDaily }
            </div>
        </div>
    );
};

ForecastTabsPanel.prototype = {
    activeIndex: PropTypes.number,
    data:        PropTypes.array,
};

export default ForecastTabsPanel;
