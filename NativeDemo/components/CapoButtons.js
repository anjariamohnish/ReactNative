import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';

import { selectCapo } from '../actions';
import { BUTTON_GROUP_STYLE } from '../constants';

const CAPO_POSITIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

class CapoButtons extends Component {

    render() {

        const { selectedCapo } = this.props.selectedValues;
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle
        } = styles;

        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text h3>Key</Text>
                <Text h1 style={{ marginBottom: 2 }}>{selectedCapo}</Text>
                <ButtonGroup
                    onPress={index => this.props.selectCapo(index)}
                    buttons={CAPO_POSITIONS}
                    selectedIndex={selectedCapo - 1}
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
        selectedValues: state.selectedValuesReducer
    }
}

export default connect(mapStateToProps, { selectCapo })(CapoButtons);