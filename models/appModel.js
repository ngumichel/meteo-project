import {AsyncStorage} from "react-native";

export const app = {
    state: {
        name: '',
    },
    reducers: {
        setName(state, {name}) {
            return {...state, name};
        },
    },
    effects: {



    },
};
