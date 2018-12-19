import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Platform, TextInput, KeyboardAvoidingView, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Text } from 'react-native-elements';

import { STATUS_BAR_HEIGHT, SCREEN_WIDTH, SCREEN_HEIGHT } from '../constants';
import { loginUser } from '../actions';




class Login extends Component {

    static navigationOptions = () => ({
        title: 'Login',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 0,
            // backgroundColor: '#2196F3'
        }
    });


    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            password: null
        }
    }

    handleLogin = () => {
        if (this.state.userName && this.state.password)
            this.props.loginUser({ userName: this.state.userName, password: this.state.password });
    }

    componentDidUpdate(prevProps) {
        if (this.props.user && !prevProps.user) {
            this.setState({
                userName: null,
                password: null
            })
            this.props.navigation.navigate('Dashboard');
        }
    }

    render() {

        const {
            container, logoContainer, subtitle, form, inputContainer,
            inputStyle, loginButton, userNameInput
        } = styles;
        return (
            <ImageBackground source={require('../../assets/login_background.png')} style={{ width: '100%', height: '100%' }}>
                <KeyboardAvoidingView style={container} behavior="padding" enabled>
                    <View>
                        <View style={logoContainer}>
                            <Image source={require('../../assets/lumulogo.png')} />
                            <Text style={subtitle}>Pre-Authorization Demo</Text>
                        </View>
                        <View style={form}>
                            <View style={inputContainer}>
                                <TextInput
                                    style={[inputStyle, userNameInput]}
                                    placeholder='Username'
                                    placeholderTextColor='white'
                                    value={this.state.userName}
                                    onChangeText={(userName) => this.setState({ userName })}
                                />
                                <TextInput
                                    style={inputStyle}
                                    placeholder='Password'
                                    placeholderTextColor='white'
                                    value={this.state.password}
                                    onChangeText={(password) => this.setState({ password })}
                                />
                            </View>
                            <View style={loginButton}>
                                <TouchableOpacity onPress={this.handleLogin}>
                                    <Image source={require('../../assets/button.png')} style={{ width: 35, height: 35, marginLeft: 15 }} />
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        marginBottom: 25
    },
    subtitle: {
        color: 'rgba(255, 255, 255, 0.6)',
        letterSpacing: 0.4,
        paddingRight: 36,
        alignSelf: 'flex-end',
    },
    form: {
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 1
    },
    inputStyle: {
        padding: 12,
        paddingLeft: 15,
        borderBottomColor: '#979797',
        borderBottomWidth: 1,
        color: 'white',
        backgroundColor: '#373737',
    },
    userNameInput: {
        marginBottom: 18,
    },
    loginButton: {
        alignSelf: 'flex-end'
    }
})


const mapStateToProps = (state) => {
    return {
        user: state.lumuReducer.user
    }
}

export default connect(mapStateToProps, { loginUser })(Login);