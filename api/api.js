const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const apiKey = 'f2796c868ee38ec9acbae3fb973f426e';

// Private functions
const callApi = (endpoint) => {
    const url = `${apiUrl}${endpoint}&appid=${apiKey}`;

    return fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((data) => {
            return JSON.parse(data);
        });
};

export const findCityByCoordinates = (lat, lon) => callApi(`weather?lat=${lat}&lon=${lon}`);
export const findDefaultWeather = (cityId) => callApi(`weather?id=${cityId}`);
export const findForecastById = (cityId) => callApi(`forecast?id=${cityId}`);
export const findSearchList = (cityName) => callApi(`find?q=${cityName}`);