import {requestGet} from "../utils/WeatherAPI";

export const app = {
    state: {
        name: '',
        cities: [],
        informations: {},
    },
    reducers: {
        setName(state, {name}) {
            return {...state, name};
        },
        setCities(state, {cities}) {
            return {...state, cities};
        },
        setInformations(state, {informations}) {
            return {...state, informations};
        },
    },
    effects: (dispatch) => ({

        addCity(payload, rootState) {
            const newCity = rootState.app.cities.slice();
            newCity.push(payload.city);
            this.setCities({cities: newCity});
        },

        async getLocalMeteoInformations(location, rootState) {
            if (location) {
                const {coords: {latitude, longitude}} = location;
                const lat = latitude;
                const lon = longitude;

                /*const response = await requestGet('weather', `lat=${lat}&lon=${lon}`);
                if (response) {
                    const localCity = rootState.app.cities.slice();
                    localCity.push(response.name);
                    this.setCities({cities: localCity});
                }*/
                var promise1 = new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        resolve('foo');
                    }, 3000);
                });
                await promise1.then(response => {console.log(response); });
                console.log("hello");
            }
        },

        async getMeteoInformations(city) {
            //console.log(city);
            const response = await requestGet('weather', 'q=valence');
            if (response) {
                this.setInformations({informations: response});
            }
            //console.log(response);
        },

    })
};
