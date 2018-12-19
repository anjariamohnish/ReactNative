import React, { Component } from 'react';
import { View, StyleSheet, Platform, Image, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import RF from 'react-native-responsive-fontsize';

import { Card } from 'react-native-elements';


import { STATUS_BAR_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants';
import { logoutUser, getRecordsCount } from '../actions';

class Dashboard extends Component {

    static navigationOptions = () => ({
        title: 'Dashboard',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 0,
            // backgroundColor: '#2196F3'
        },
        gesturesEnabled: false
    });

    componentDidMount() {
        this.props.getRecordsCount('PENDING');
    }

    componentDidUpdate(prevProps) {
        if (!this.props.user && prevProps.user) {
            this.props.navigation.navigate('Login');
        }
    }

    navigateToWorkflow = () => {
        this.props.navigation.navigate('PreAuth');
    }

    handleLogout = () => {
        this.props.logoutUser();
    }

    render() {
        const {
            container, userInfo, userInfoBox, userData, workflowText,
            username, designation, profile, title, cardsContainer, card, opacity,
            cardTitle, cardSubtitle, cardText, cardImageStyle, cardTextContainer,
            pendingRecordsContainer, pendingRecordsText
        } = styles;

        const { user, pendingRecordsCount } = this.props;

        return (
            <View style={container}>
                <TouchableWithoutFeedback onPress={this.handleLogout}>
                    <View style={userInfo}>
                        <View style={userInfoBox}>
                            <View>
                                <Image
                                    style={profile}
                                    source={require('../../assets/icon.png')}
                                    resizeMode='stretch'
                                />
                            </View>
                            <View style={userData}>
                                <Text style={username}>{user && user.userName ? user.userName : null}</Text>
                                <Text style={designation}>Pre-Auth Specialist</Text>
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                <View style={workflowText}>
                    <Text style={title}>My Workflows</Text>
                </View>
                <View>
                    <ScrollView horizontal={true}>
                        <View style={cardsContainer}>
                            <View>
                                <Card
                                    image={require('../../assets/prereg.png')}
                                    imageProps={{ resizeMode: 'cover' }}
                                    imageStyle={cardImageStyle}
                                    containerStyle={[card, opacity]}
                                >
                                    <View style={cardTextContainer}>
                                        <Text style={cardTitle}>Pre-Registration</Text>
                                        <Text style={cardSubtitle}>Auth Confirmation</Text>
                                        <Text style={cardText}>Review Scheduled hospital procedures, ensure prior authorizations received if needed</Text>
                                    </View>

                                </Card>
                            </View>

                            <View>
                                <TouchableWithoutFeedback onPress={this.navigateToWorkflow}>
                                    <Card
                                        image={require('../../assets/preauth.png')}
                                        imageProps={{ resizeMode: 'cover' }}
                                        imageStyle={cardImageStyle}
                                        containerStyle={card}
                                    >
                                        <View style={cardTextContainer}>
                                            <Text style={cardTitle}>Pre-Authorization</Text>
                                            <Text style={cardSubtitle}>Auth Confirmation</Text>
                                            <Text style={cardText}>Review Scheduled hospital procedures, ensure prior authorizations received if needed</Text>
                                        </View>

                                    </Card>
                                </TouchableWithoutFeedback>
                                {
                                    pendingRecordsCount ?
                                        <View style={pendingRecordsContainer}>
                                            <Text style={pendingRecordsText}>{pendingRecordsCount}</Text>
                                        </View>
                                        :
                                        <View></View>
                                }

                            </View>



                            <View>
                                <Card
                                    image={require('../../assets/eligicheck.png')}
                                    imageProps={{ resizeMode: 'cover' }}
                                    imageStyle={cardImageStyle}
                                    containerStyle={[card, opacity]}
                                >
                                    <View style={cardTextContainer}>
                                        <Text style={cardTitle}>Eligibilty Checks</Text>
                                        <Text style={cardSubtitle}>Auth Confirmation</Text>
                                        <Text style={cardText}>Review Scheduled hospital procedures, ensure prior authorizations received if needed</Text>
                                    </View>

                                </Card>
                            </View>



                            <View>
                                <Card
                                    image={require('../../assets/registration.png')}
                                    imageProps={{ resizeMode: 'cover' }}
                                    imageStyle={cardImageStyle}
                                    containerStyle={[card, opacity]}
                                >
                                    <View style={cardTextContainer}>
                                        <Text style={cardTitle}>Registration</Text>
                                        <Text style={cardSubtitle}>Auth Confirmation</Text>
                                        <Text style={cardText}>Review Scheduled hospital procedures, ensure prior authorizations received if needed</Text>
                                    </View>

                                </Card>
                            </View>


                        </View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    userInfo: {
        paddingTop: 20,
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    userInfoBox: {
        width: '35%',
        borderColor: '#312E2E',
        borderWidth: 0.5,
        flexDirection: 'row',
    },
    profile: {
        width: 55,
        height: 65,
        marginLeft: 5,
    },
    userData: {
        flexDirection: 'column',
        padding: 5,
        flex: 1,
        alignSelf: 'center'
    },
    username: {
        fontSize: RF(2),
    },
    designation: {
        fontSize: RF(1)
    },
    title: {
        fontSize: RF(3),
        marginLeft: 10,
        marginTop: 5,
    },
    cardsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    workflowText: {
        marginTop: SCREEN_HEIGHT * 0.10,
        marginBottom: 20,
    },
    opacity: {
        opacity: 0.5
    },
    card: {
        width: SCREEN_WIDTH * 0.5,
        height: SCREEN_HEIGHT * 0.5,
        borderRadius: 10,
        backgroundColor: '#ECEFF1'
    },
    cardTitle: {
        fontSize: RF(2),
        fontWeight: 'bold'
    },
    cardSubtitle: {
        marginTop: 1,
        fontSize: RF(1.5)
    },
    cardTextContainer: {
        marginLeft: 2,
        padding: 5
    },
    cardText: {
        marginTop: 8,
        color: 'gray',
        fontSize: RF(1.2)
    },
    cardImageStyle: {
        height: SCREEN_WIDTH * 0.6 / 2,
        borderRadius: 10,
        overflow: 'hidden',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0
    },
    pendingRecordsContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        borderColor: 'white',
        borderWidth: 2,
        backgroundColor: 'rgb(15, 71, 161)'
    },
    pendingRecordsText: {
        left: 12,
        top: 12,
        color: 'white'
    }
})

const mapStateToProps = (state) => {
    return {
        user: state.lumuReducer.user,
        pendingRecordsCount: state.lumuReducer.pendingRecordsCount
    }
}

export default connect(mapStateToProps, { logoutUser, getRecordsCount })(Dashboard);