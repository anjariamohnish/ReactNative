import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableHighlight, Image, TouchableOpacity, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import RF from 'react-native-responsive-fontsize';

import { toggleDrawer } from '../../../actions';
import { SCREEN_WIDTH } from '../../../constants';


class PreAuthMain extends Component {


    constructor(props) {
        super(props);

        this.state = {
            confirmedBarWidth: new Animated.Value(0),
            pendingBarWidth: new Animated.Value(0),
            deniedBarWidth: new Animated.Value(0)
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.updateProgressBarValue(this.state.confirmedBarWidth, 30)
            // this.updateProgressBarValue(this.state.pendingBarWidth, 20)
            this.updateProgressBarValue(this.state.deniedBarWidth, 20)
        }, 3000)
    }

    componentDidUpdate(prevProps) {

    }

    updateProgressBarValue(stateValue, toValue) {
        Animated.timing(
            stateValue,
            {
                toValue,
                duration: 1500
            }
        ).start();
    }

    render() {
        const {
            container, opacity, noOpacity, titleContainer,
            textContainer, title, subTitle, drawerIcon, progressFilterContainer, progressBar, progressBarContainer, bar, pendingBar,
            deniedBar, confirmedBar, filterButtonsContainer, filterButton, filterIcon, filterButtonText
        } = styles;

        const { openDrawer, toggleDrawer } = this.props;

        return (
            <View style={[container, openDrawer ? opacity : noOpacity]}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={titleContainer}>
                            <Icon
                                name='angle-left'
                                color='black'
                                type='font-awesome'
                                size={RF(3)}
                                onPress={() => { }}
                            />
                            <View style={textContainer}>
                                <Text style={title}>Pre-Authorizations</Text>
                                <Text style={subTitle}>All Scheduled Procedures</Text>
                            </View>
                        </View>
                        <View style={drawerIcon}>
                            <TouchableHighlight
                                style={{ padding: 10 }}
                                onPress={() => { toggleDrawer() }}
                            >
                                <Icon
                                    name='bars'
                                    color='black'
                                    type='font-awesome'
                                />
                            </TouchableHighlight>
                        </View>
                    </View>

                    <View style={progressFilterContainer}>
                        <View style={progressBarContainer}>
                            <View style={progressBar}>
                                <Animated.View style={[bar, confirmedBar, {
                                    width: this.state.confirmedBarWidth.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: ['0%', '100%']
                                    })
                                }]}></Animated.View>

                                <Animated.View style={[bar, pendingBar, {
                                    width: this.state.pendingBarWidth.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: ['0%', '100%']
                                    })
                                }]}></Animated.View>

                                <Animated.View style={[bar, deniedBar, {
                                    width: this.state.deniedBarWidth.interpolate({
                                        inputRange: [0, 100],
                                        outputRange: ['0%', '100%']
                                    })
                                }]}></Animated.View>
                            </View>
                        </View>

                        <View style={filterButtonsContainer}>
                            <TouchableOpacity>
                                <View style={filterButton} >
                                    <Image source={require('../../../../assets/confirmed.png')} style={filterIcon} />
                                    <Text style={filterButtonText}>Confirmed (20)</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={filterButton} >
                                    <Image source={require('../../../../assets/pending.png')} style={filterIcon} />
                                    <Text style={filterButtonText}>Pending (20)</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={filterButton} >
                                    <Image source={require('../../../../assets/denied.png')} style={filterIcon} />
                                    <Text style={filterButtonText}>Denied (20)</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                                <View style={filterButton} >
                                    <Image source={require('../../../../assets/open.png')} style={filterIcon} />
                                    <Text style={filterButtonText}>Open (20)</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingRight: 10,
    },
    opacity: {
        opacity: 0.3
    },
    noOpacity: {
        opacity: 1
    },
    titleContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textContainer: {
        flexDirection: 'column',
        marginLeft: 20
    },
    title: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: RF(3),
        marginTop: 12
    },
    subTitle: {
        color: 'rgba(0, 0, 0, 0.6)',
        fontSize: RF(1)
    },
    drawerIcon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    progressFilterContainer: {
        marginLeft: 30
    },
    progressBarContainer: {
        width: SCREEN_WIDTH * 0.5,
        marginBottom: 20,
    },
    progressBar: {
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        height: 15,
        backgroundColor: 'rgba(151, 151, 151, 0.2)'
    },
    bar: {
        maxWidth: '100%',
        height: 15,
    },
    confirmedBar: {
        backgroundColor: '#0f47a1'
    },
    pendingBar: {
        backgroundColor: '#979797'
    },
    deniedBar: {
        backgroundColor: '#b00020'
    },
    filterButtonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    filterButton: {
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 30,
        padding: 9,
        marginRight: 10,
        marginBottom: 10
    },
    filterIcon: {
        width: 12,
        height: 12,
        marginRight: 5,
    },
    filterButtonText: {
        alignSelf: 'center',
        fontSize: RF(1)
    }
})

const mapStateToProps = (state) => {
    return {
        openDrawer: state.lumuReducer.openDrawer
    }
}

export default connect(mapStateToProps, { toggleDrawer })(PreAuthMain);