import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View, FlatList} from "react-native";
import {SearchBar, ListItem, Card, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";


const styleSheet = {
    container: {
        width: '100%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 24,
    },

};

const AddCityScreen = props => {

    const [city, setCity] = useState('');
    const {dispatch, navigation} = props;
    const {cities, informations, searchInformations} = props;

    function handleSubmit() {
        if (city !== '') {
            dispatch({
                type: 'app/addCity',
                payload: {city},
            });
        }
    }

    const renderItem = ({item}) => (
        <Text>{item}</Text>
    );

    return (
        <View style={styleSheet.container}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(text) => setCity(text)}
                value={city}
                onBlur={handleSubmit}
            />

            <FlatList
                data={cities}
                renderItem={renderItem}
                keyExtractor={item => item}
            />
        </View>
    );

};

export default connect(state => state.app)(AddCityScreen);