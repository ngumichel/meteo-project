import {requestGet} from "../utils/WeatherAPI";
import NavigationService from "../navigation/NavigationService";


export const app = {
    state: {
        name: '',
        cities: [],
        informations: {},
        searchInformations: {},

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
        setCitiesInformations(state, {cities, informations}) {
            return {...state, cities, informations}
        },
        setSearchInformations(state, {searchInformations}) {
            return {...state, searchInformations}
        }
    },
    effects: (dispatch) => ({

        async searchCity(payload, rootState) {
            if (response.cod == 200) {
                this.setSearchInformations({searchInformations: response});
            }
        },

        async addCity(payload, rootState) {
            const response = await requestGet('weather', `q=${payload.city}`);
            if (response.cod == 200) {
                const newCity = rootState.app.cities.slice();
                const tempInfo = JSON.parse(JSON.stringify(rootState.app.informations));
                newCity.push(response.name);
                this.setCitiesInformations({informations: tempInfo, cities: newCity});
                NavigationService.navigate('Home');
            }
        },

        async getLocalMeteoInformations(location, rootState) {
            if (location) {
                const {coords: {latitude, longitude}} = location;
                const lat = latitude;
                const lon = longitude;

                const response = await requestGet('weather', `lat=${lat}&lon=${lon}`);
                //console.log(response);
                if (response.cod == 200) {
                    const localCity = rootState.app.cities.slice();
                    const tempInfo = JSON.parse(JSON.stringify(rootState.app.informations));
                    localCity.push(response.name);
                    tempInfo[response.name] = response;
                    this.setCitiesInformations({informations: tempInfo, cities: localCity});
                }
            }
        },

    })
};
