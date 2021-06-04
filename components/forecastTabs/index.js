import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Tabs, Tab } from '@material-ui/core';
import PropTypes from 'prop-types';
import {MONTH_SHORT, WEEKDAYS_SHORT} from '../../const/const';

function a11yProps(index) {
    return {
        id:              `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

const ForecastTabs = ({handleChange, activeIndex, data }) => {
    const tabs = data.map((item, index) => {
        const date = new Date(item);
        const weekday = date.getDay();

        const month = Number(item.split('-')[ 1 ]);
        const data = Number(item.split('-')[ 2 ]);

        const label = `${WEEKDAYS_SHORT[ weekday ]}, ${data} ${MONTH_SHORT[ month ]}`;

        return (
            <Tab
                key = { index }
                label = { label }
                { ...a11yProps(activeIndex) }
            />
        );
    });

    return (
        <>
            <AppBar
                color = 'default'
                position = 'static'>
                <Tabs
                    aria-label = 'scrollable force tabs example'
                    indicatorColor = 'primary'
                    scrollButtons = 'on'
                    textColor = 'primary'
                    value = { activeIndex }
                    variant = 'scrollable'
                    onChange = { handleChange }>
                    {tabs}
                </Tabs>
            </AppBar>
        </>
    );
};

ForecastTabs.prototype = {
    handleChange: PropTypes.func,
    activeIndex:  PropTypes.number,
    data:         PropTypes.array,
};

export default ForecastTabs;
