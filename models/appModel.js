import {AsyncStorage} from "react-native";

export const app = {
    state: {
        name: '',
    },
    reducers: {
        setName(state, name) {
            return {...state, name};
        },
    },
    effects: {
        async handleSubmit() {
            if(name !== '') {
                await AsyncStorage.setItem('name', name);
                navigation.navigate('Welcome');
            }
        }
    },
};
