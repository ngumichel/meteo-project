import {AsyncStorage} from "react-native";

export const app = {
    state: {
        name: '',
        cities: [],
    },
    reducers: {
        setName(state, {name}) {
            return {...state, name};
        },
        setCities(state, {cities}) {
            return {...state, cities};
        }
    },
    effects: {

        addCity(payload, rootState) {
            const newCity = rootState.app.cities.slice();
            newCity.push(payload.city);
            this.setCities({cities: newCity});
        },

        getMeteoInfo(payload, rootState) {

        },

    },
};
