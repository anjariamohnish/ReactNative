import React, { Component } from 'react';
import { View, Image, Platform, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';
import * as Expo from 'expo';

import KeysButtons from '../components/KeysButtons';
import CapoButtons from '../components/CapoButtons';
import CapoKey from '../components/CapoKey';
import ChordsModal from '../modals/ChordsModal';
import ViewChordsButton from '../components/ViewChordsButton';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH, APP_THEME_COLOR } from '../constants';
import icon from '../assets/icons/pure-icon.png';



const cacheImages = images => images.map(image => {
    if (typeof image === 'string') return Image.prefetch(image);
    return Expo.Asset.fromModule(image).downloadAsync();
});

class MainScreen extends Component {

    static navigationOptions = () => ({
        title: 'Capo Keys',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: APP_THEME_COLOR
        },
        titleStyle: {
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: <Image source={icon} style={styles.iconStyle} />
    });


    constructor(props) {
        super(props);
        this.state = {
            appIsReady: false
        }
    }


    async _loadAssets() {
        const imageAssets = cacheImages([icon]);
        await Promise.all({ ...imageAssets })
        this.setState({ appIsReady: true });

        // second way
        // Promise.all({ ...imageAssets })
        //     .then(() => {
        //         this.setState({ appIsReady: true });
        //     })
    }


    componentWillMount() {
        this._loadAssets();
    }

    render() {
        const { containerStyle, dividerStyle, buttonContainerStyle } = styles;
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                <ChordsModal />
                <View style={containerStyle}>
                    <KeysButtons />
                    <Divider style={dividerStyle} />
                    <CapoButtons />
                    <Divider style={dividerStyle} />
                    <CapoKey />
                </View>
                <ViewChordsButton style={buttonContainerStyle} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    iconStyle: {
        marginTop: 5,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: "center"
    },
    dividerStyle: {
        width: SCREEN_WIDTH * 0.9,
        backgroundColor: APP_THEME_COLOR
    },
    buttonContainerStyle: {
        width: SCREEN_WIDTH,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10
    }
})

export default MainScreen;