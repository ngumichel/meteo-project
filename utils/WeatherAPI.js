const baseUrl = 'http://api.openweathermap.org/data/2.5/';
const apiKey = 'eebc227533c93b621c8e8e7465200009';

export function requestGet(endPoint, query = '') {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&units=metric&APPID=${apiKey}`;
    return fetch(baseUrl + endPoint, {
        method: 'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response.json().then(json => {
                return json !== undefined ? json : {};
            }).catch(e => ({}));
        }
        return response.status;
    });
}