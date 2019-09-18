import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Dimensions, Text, TextInput, View, AsyncStorage} from "react-native";
import {connect} from 'react-redux';

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

const EditScreen = props => {

    const [name, setName] = useState('');
    const {dispatch, navigation} = props;

    async function handleSubmit() {
        await AsyncStorage.setItem('name', name);
        dispatch({
            type: 'app/setName',
            payload: {name}
        });
        navigation.navigate('Welcome');
    }

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.label}>Prénom</Text>
            <TextInput class="form-input" style={styleSheet.input} onChangeText={(text) => setName(text)} value={name}/>
            <Button {...props} onPress={handleSubmit} title="OK"/>
        </View>
    );

};

export default connect(state => state)(EditScreen);