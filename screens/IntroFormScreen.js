import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage} from 'react-native';
import {app} from "../models/appModel";

const {width} = Dimensions.get('window');

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

const IntroFormScreen = props => {

    const [name, setName] = useState('');
    const {dispatch, navigation} = props;

    async function handleSubmit() {
        if (name !== '') {
            await AsyncStorage.setItem('name', name);
            dispatch({
                type: 'app/setName',
                payload: {name}
            });

            navigation.navigate('Welcome');
        }
    }

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Prénom</Text>
            <TextInput style={styleSheet.input} onChangeText={(text) => setName(text)} value={name}/>
            <Button style={styleSheet.button} onPress={handleSubmit} title="OK"/>
        </View>
    );

};

IntroFormScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default connect()(IntroFormScreen);