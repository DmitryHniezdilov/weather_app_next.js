import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Head from 'next/head';
import { useRouter } from 'next/router'
import ForecastTabs from '../components/forecastTabs';
import ForecastTabsPanel from '../components/forecastTabsPanel';
import PageLayout from "../components/pageLayout";
import * as weatherActions from '../redux/actions/weather';
import styles from '../styles/forecast.module.css';


const Forecast = () => {
  const dispatch = useDispatch();
  const {currentId, currentCity, forecastList} = useSelector((state) => state.weather);
  const router = useRouter();

  const [ activeIndex, setActiveIndex ] = useState(0);
  const [ forecastTabsList, setForecastTabsList ] = useState([]);
  const [ forecastTabPanel, setForecastTabPanel ] = useState([]);

  const handleChange = (event, index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if (!currentId){
      router.push('/');
      return;
    }
    const getForecast = async () => {
      await dispatch(weatherActions.fetchForecastById(currentId));
    };
    getForecast();
  }, [ ]);

  useEffect(() => {
    if (forecastList.length) {
      const getForecastTabsList = forecastList.map(({date}) =>  date);
      const getForecastTabPanel = forecastList.map(({items}) => [ ...items ]);
      setForecastTabsList(getForecastTabsList);
      setForecastTabPanel(getForecastTabPanel);
    }
  }, [ forecastList ]);

  return (
    <>
      <Head>
        <title>Weather app forecast page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <PageLayout>
            {!!forecastList.length && (
              <div className={styles.forecast5}>
                <h2 className=''>{`Weather in ${currentCity}`}</h2>
                <ForecastTabs
                  activeIndex={activeIndex}
                  data={forecastTabsList}
                  handleChange={handleChange}
                />
                <ForecastTabsPanel
                  activeIndex={activeIndex}
                  data={forecastTabPanel[activeIndex]}
                />
              </div>
            )}
      </PageLayout>
    </>
  )
}

export default Forecast;