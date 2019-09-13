import React from 'react';
import PropTypes from 'prop-types';
import {Button, Dimensions, Text, TextInput, View} from "react-native";
import {connect} from 'react-redux';

const {width} = Dimensions.get('window');

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

const EditScreen = props => {

console.log(props);

return null;

};

export default connect(state => state)(EditScreen);