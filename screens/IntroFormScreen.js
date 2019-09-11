import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { init } from '@rematch/core';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';
import {app} from "../models/appModel";

const store = init( {
    models: { app },
});

const { width } = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'red',
        fontSize: 18,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1
    },
};

const IntroFormScreen = props => {

    app.effects.handleSubmit();

    const [name, setName] = useState('');
    const {dispatch, navigation} = props;

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Prénom</Text>
            <TextInput style={styleSheet.input} onChangeText={(text) => setName(text)} value={name}/>
            <Button onPress={handleSubmit} title="OK" color="#EAC255"/>
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