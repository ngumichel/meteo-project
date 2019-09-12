import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styleSheet = {
    container: {
        width: width,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    }
};

const HomeScreen = props => {

    const name = props.app.name;

    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.textStyle}>{`Hello ${name}!`}</Text>
        </View>
    );
};

HomeScreen.propTypes = {};

export default connect(state => state)(HomeScreen);