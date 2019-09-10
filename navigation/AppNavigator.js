import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import IntroScreen from "../screens/IntroScreen";
import IntroFormScreen from "../screens/IntroFormScreen";


const AppNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Intro: IntroScreen,
    Auth: AuthLoadingScreen
}, {
    initialRouteName: 'Home',
    activeTintColor: '#f0edf6',
    inactiveTintColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
});

const AuthStack = createStackNavigator({ SignIn: IntroFormScreen, Welcome: IntroScreen });

export default createAppContainer(AppNavigator);