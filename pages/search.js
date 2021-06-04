import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as weather from '../redux/actions/weather';
import Head from 'next/head';
import {Box} from "@material-ui/core";
import SearchInput from "../components/searchInput";
import PageLayout from "../components/pageLayout";
import SearchList from "../components/searchList";
import styles from '../styles/search.module.css'

const Search = () => {
  const { searchList } = useSelector((state) => state.weather);
  const isSearchResult = searchList.length >= 1;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(weather.resetSearchList());
  }, []);

  const setSelectedWeather = (id) => {
    const getSelectedItem = searchList.find((item) => item.id === id);

    dispatch(weather.setItemToWeather(getSelectedItem));
  };

  return (
    <>
      <Head>
        <title>Weather app search page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <PageLayout>
        <Box
          className={styles.search}
          component="div">
            <SearchInput />
            {isSearchResult
            &&  (
              <SearchList
                data = { searchList }
                setSelectedItem = { (id) => setSelectedWeather(id) }
              />
            )
            }
        </Box>
      </PageLayout>
    </>
  )
}

export default Search;
