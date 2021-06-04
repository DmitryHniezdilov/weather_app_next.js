import * as types from '../actionTypes';
import * as Api from '../../api/api';
import {DEFAULT_CITY_ID} from '../../const/const';

export const getLocation = () => (dispatch) => {
    const successLocation = async (pos) => {
        const crd = {
            lat:  pos.coords.latitude,
            long: pos.coords.longitude,
        };
        const resData = await Api.findCityByCoordinates(crd.lat, crd.long);

        dispatch({type: types.SET_WEATHER, data: resData});
        dispatch({type: types.FINISH_LOADING});
    };

    const defaultWeather = async (error) => {
        dispatch({type: types.SET_WEATHER_ERR_LOCATION, errLocation: error});
        const resData = await Api.findDefaultWeather(DEFAULT_CITY_ID); // add to constants
        dispatch({type: types.SET_WEATHER, data: resData});
        dispatch({type: types.FINISH_LOADING});
    };

    dispatch({type: types.START_LOADING});
    //
    navigator.geolocation.getCurrentPosition(successLocation, defaultWeather);
};

export const fetchCitiesListByName = (cityName) => async (dispatch) => {
    dispatch({type: types.START_LOADING});
    const resData = await Api.findSearchList(cityName);
    const isFindCity = resData.count >= 1;

    if (!isFindCity) {
        dispatch({type: types.SET_SEARCH_ERR_TRUE});
        dispatch({type: types.FINISH_LOADING});

        return;
    }

    dispatch({type: types.SET_SEARCH, searchData: resData});
    dispatch({type: types.FINISH_LOADING});
};

export const fetchForecastById = (cityId) => async (dispatch) => {
    dispatch({type: types.START_LOADING});
    const resData = await Api.findForecastById(cityId);

    const sortedResData = resData.list.reduce((acc, item) => {
        const date = item.dt_txt.split(' ')[ 0 ];
        const itemIndex = acc.findIndex((elem) => elem.date === date);

        if (itemIndex === -1) {
            const dateItem = {
                date,
                items: [ item ],
            };

            return [ ...acc, dateItem ];
        }

        acc[ itemIndex ].items.push(item);

        return [ ...acc ];
    }, []);

    dispatch({type: types.SET_FORECAST, forecastList: sortedResData});
    dispatch({type: types.FINISH_LOADING});
};

export const setItemToWeather = (item) => (dispatch) => {
    dispatch({type: types.SET_WEATHER, data: item});
};

export const setErrSearchListToFalse = () => ({ type: types.SET_SEARCH_ERR_FALSE });

export const resetSearchList = () => ({ type: types.RESET_SEARCH_LIST });
