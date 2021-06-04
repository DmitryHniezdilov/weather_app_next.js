import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as weather from '../redux/actions/weather';
import Head from 'next/head';
import {Button, Grid} from "@material-ui/core";
import PageLayout from "../components/pageLayout";
import ForecastItem from "../components/forecastItem";
import Link from "../components/link";
import styles from '../styles/index.module.css';


const Index = () => {
  const dispatch = useDispatch();
  const {currentCity, currentTemp, weather: currentWeather} = useSelector((state) => state.weather);

  useEffect(() => {
    const getPosition = async () => {
      await dispatch(weather.getLocation());
    };

    if (!currentCity){
      getPosition();
    }
  }, [ ]);

  return (
    <>
      <Head>
        <title>Weather app index page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <PageLayout>

        <Grid
          className ={styles.index}
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing = { 0 }>
            <Grid item>
              <h2
                align="center"
                className ={styles.index__title}>
                  Current weather in {currentCity}
              </h2>
            </Grid>
            <Grid item>
                <ForecastItem
                  icon = { currentWeather?.icon }
                  temp = { currentTemp }
                />
            </Grid>
          <Grid
            item
            className={styles.index__searchBtnWrap}
          >
            <Button
              variant="contained"
              style = {{backgroundColor: '#009688', color: 'white'}}
              component={Link}
              naked
              href="/search">
              Search City
            </Button>
          </Grid>
        </Grid>
      </PageLayout>
    </>
  )
}

export default Index;