import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

import { selectKeyIndex } from '../actions';
import { BUTTON_GROUP_STYLE } from '../constants';

class KeysButtons extends Component {

    render() {
        const { selectedValues: { selectedKeyIndex }, keys } = this.props;
        const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key]));
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = styles;

        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text h3>Key</Text>
                <Text h1 style={{ marginBottom: 2 }}>{keys[selectedKeyIndex].key}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectKeyIndex(index)}
                    buttons={keyButtons}
                    selectedIndex={selectedKeyIndex}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(BUTTON_GROUP_STYLE)


const mapStateToProps = (state) => {
    return {
        keys: state.keysReducer,
        selectedValues: state.selectedValuesReducer
    }
}

export default connect(mapStateToProps, { selectKeyIndex })(KeysButtons);