import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Text, TextInput, View, FlatList} from "react-native";
import {connect} from 'react-redux';
import {Item} from "react-native-paper";

const styleSheet = {
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
    },
    button: {
        titleColor: 'red',
    }
};

const AddCityScreen = props => {

    const [city, setCity] = useState('');
    const {dispatch, navigation} = props;
    const {cities} = props;

    function handleSubmit() {
        if (city !== '') {
            dispatch({
                type: 'app/addCity',
                payload: {city},
            });
        }
    }

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Nom de la ville</Text>
            <TextInput class="form-input" style={styleSheet.input} onChangeText={(text) => setCity(text)}
                       value={city}/>
            <Button onPress={handleSubmit} title="OK" color="#CEA255"/>
            <FlatList
                data={cities}
                renderItem={({item}) => <Text>{item}</Text>}
                keyExtractor={item => item}
            />
        </View>
    );

};

export default connect(state => state.app)(AddCityScreen);