import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage, FlatList} from 'react-native';
import {ListItem} from 'react-native-elements'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    textStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    errorStyle: {
        color: 'red',
        fontSize: 25,
        fontWeight: 'bold',
    },
};

const HomeScreen = props => {

    const {dispatch} = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');
    const [error, setError] = useState('');
    const {cities, informations} = props.app;

    async function _getLocationAsync() {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            setError('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        dispatch({type: 'app/getLocalMeteoInformations', payload: location});
    }

    useEffect(() => {
        _getLocationAsync();
    }, []);

    useEffect(() => {
        dispatch({type: 'app/getMeteoInformations', payload: 'valence'})
    }, []);

    useEffect(() => {
        if (informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
        }
    });

    console.log(informations);

    const renderItem = ({item}) => (
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}>{`Ville: ${nameCity}`}</Text>
            <Text style={styleSheet.textStyle}>{`Temperature: ${Math.round(temp)}°C`}</Text>
            {error !== '' && <Text style={styleSheet.errorStyle}>{error}</Text>}
        </View>
    );


    return (

        <FlatList
            data={[informations]}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
        />


    );
};

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired
};

export default connect(state => state)(HomeScreen);