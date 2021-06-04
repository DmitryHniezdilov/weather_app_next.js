import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as weather from '../../redux/actions/weather';
import {Paper, Input, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styles from './styles.module.scss';

const SearchInput = () => {
    const [ searchValue, setSearchValue ] = useState('');
    const [ currentSearchValue, setcurrentSearchValue ] = useState('');
    const [ isError, setError ] = useState(false);
    const [ textPlaceholder, setTextPlaceholder ] = useState('Enter City Name');
    const { isErrSearchList } = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    const setSubmit = (event) => {
        event.preventDefault();

        if (searchValue === currentSearchValue) {
            setError(true);
            setSearchValue('');
            setTextPlaceholder('This is a duplicate request');

            return;
        }

        setcurrentSearchValue(searchValue);
        setSearchValue('');
        const cityName = searchValue;
        const isSubmitable = cityName.length >= 3;

        if (!isSubmitable) {
            setError(true);
            setTextPlaceholder('Request is too short');

            return;
        }

        dispatch(weather.fetchCitiesListByName(cityName));
    };

    useEffect(() => {
        if (searchValue.length >= 1) {
            setError(false);
            setTextPlaceholder('Enter City Name');
            dispatch(weather.setErrSearchListToFalse());
        }
    }, [ searchValue ]);

    useEffect(() => {
        if (isErrSearchList) {
            setError(true);
            setTextPlaceholder('No such city found');
        }
    }, [ isErrSearchList ]);

    const inputStyles = `searchInput__input ${isError ? 'searchInput__input--error' : ''}`;

    return (

        <>
            <Paper
                className ={styles.searchInput__paper}
                component = 'form'
                onSubmit = { setSubmit }>
                <Input
                    className = {styles.searchInput__input}
                    error = { isError }
                    inputProps = {{ 'aria-label': 'Enter City Name' }}
                    label = 'Enter City Name'
                    placeholder = { textPlaceholder }
                    value = { searchValue }
                    onChange = { (inputData) => setSearchValue(inputData.target.value)
                    }
                />
                <IconButton
                    aria-label = 'search'
                    className ={styles.searchInput__iconbtn}
                    type = 'submit'>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </>
    );
};

export default SearchInput;
