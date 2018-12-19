import { Constants } from 'expo';
import { Dimensions } from 'react-native';

export const APP_THEME_COLOR = '#2196F3';
export const STATUS_BAR_HEIGHT = Constants.statusBarHeight;
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const BUTTON_GROUP_STYLE = {
    containerStyle: {
        height: 40,
        width: SCREEN_WIDTH * 0.9
    },
    buttonStyle: {
        backgroundColor: 'white'
    },
    selectedTextStyle: {
        color: 'orange',
        fontWeight: '900'
    }
}