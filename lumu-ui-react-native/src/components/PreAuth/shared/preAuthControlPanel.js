import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import RF from 'react-native-responsive-fontsize';
import { connect } from 'react-redux';
import { SCREEN_HEIGHT } from '../../../constants';
import { Button, Divider } from 'react-native-elements';


class PreAuthControlPanel extends Component {

    componentDidMount() {

    }

    componentDidUpdate(prevProps) {

    }

    render() {
        const {
            container, userInfoContainer, userImage, userData,
            userName, designation, divider, preAuthTitle, titleContainer,
            buttonsContainer, button, buttonText
        } = styles;

        return (
            <View style={container}>

                <View style={{ flex: 1 }}>
                    <TouchableWithoutFeedback>
                        <View style={userInfoContainer}>
                            <Image
                                style={userImage}
                                source={require('../../../../assets/icon_white.png')}
                            />
                            <View style={userData}>
                                <Text style={userName}>John Smith</Text>
                                <Text style={designation}>Pre-Auth Specialist</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={titleContainer}>
                        <Text style={preAuthTitle}>{`Pre-Auth \nNetwork`}</Text>
                    </View>
                </View>

                <View style={{ flex: 1, maxHeight: 20 }}>
                    <Divider style={[divider, { width: '80%' }]} />
                </View>

                <View style={{ flex: 5 }}>
                    <View style={buttonsContainer}>

                        <TouchableOpacity style={button}>
                            <Text style={buttonText}>1. CONNECT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={button}>
                            <Text style={buttonText}>2. SCREEN BY CPT</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={button}>
                            <Text style={buttonText}>3. RETRIEVE AUTHS</Text>
                        </TouchableOpacity>
                    </View>

                    <Divider style={divider} />
                </View>

                {/* <View style={{ flex: 5 }}>
                    <Divider style={divider} />
                </View> */}

            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfoContainer: {
        padding: 8,
        paddingLeft: '12%',
        flexDirection: 'row',
        // backgroundColor: '#f1f1f1',
        // opacity: 0.2,
        marginTop: SCREEN_HEIGHT * 0.025,
    },
    userImage: {
        width: 35,
        height: 35,
    },
    userData: {
        flexDirection: 'column',
        paddingLeft: '5%',
        paddingTop: '1%'
    },
    userName: {
        color: 'rgba(255, 255, 255, 0.64)',
        fontSize: RF(1.5)
    },
    designation: {
        color: 'rgba(255, 255, 255, 0.64)',
        fontSize: RF(1)
    },
    titleContainer: {
        flexDirection: 'row',
        paddingLeft: '12%'
    },
    preAuthTitle: {
        color: 'white',
        fontSize: RF(2.5)
    },
    divider: {
        backgroundColor: '#d3d3d3',
        opacity: 0.5
    },
    buttonsContainer: {
        flexDirection: 'column',
        paddingLeft: '12%',
        paddingRight: '12%',
    },
    button: {
        width: '100%',
        marginBottom: 8,
        backgroundColor: '#0d47a1',
        borderRadius: 20,
        padding: 10
    },
    buttonText: {
        fontSize: RF(1),
        fontStyle: 'italic',
        letterSpacing: 1.25,
        color: 'white'
    }
})

// const mapStateToProps = (state) => {
//     return {

//     }
// }

export default connect(null, {})(PreAuthControlPanel);