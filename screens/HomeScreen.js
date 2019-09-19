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

    return (
        <FlatList
            data={cities}
            renderItem={({item}) => {
                const infosCity = informations[item];
                const linkicon = "../assets/weather/001.png";
                return (
                    <View>
                        <ListItem
                            title={infosCity.name}
                            titleStyle={{fontWeight: 'bold', color: 'white'}}
                            leftAvatar={{
                                imageProps: {backgroundColor: '#707070',},
                                source: require(linkicon)
                            }}
                            containerStyle={{backgroundColor: '#505050'}}
                            bottomDivider
                            chevron
                        />
                    </View>
                )
            }}
            keyExtractor={item => String(item)}
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