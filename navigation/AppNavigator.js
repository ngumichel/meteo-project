import {createSwitchNavigator, createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import IntroScreen from "../screens/IntroScreen";
import IntroFormScreen from "../screens/IntroFormScreen";
import AddCityScreen from "../screens/AddCityScreen";
import EditScreen from "../screens/EditScreen";



const AppNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Add: AddCityScreen,
    Edit: EditScreen,
});
const AuthStack = createStackNavigator({Splash: SplashScreen, SignIn: IntroFormScreen, Welcome: IntroScreen});

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppNavigator,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
));