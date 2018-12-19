import React, { Component } from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { SCREEN_WIDTH, SCREEN_HEIGHT, APP_THEME_COLOR } from '../constants';

import { closeChordsModal } from '../actions';

class ChordsModal extends Component {


    renderChordRows() {
        const { contentRowStyle, itemContainerStyle, itemStyle } = styles;
        const {
            selectedValues: { selectedKeyIndex, selectedCapo }, keys
        } = this.props;
        let count = 0;
        return keys.map(({ key }) => {
            const keyChordIndex = (count + selectedKeyIndex) > 11 ?
                (count + selectedKeyIndex) - 12 : (count + selectedKeyIndex);
            const capoChordIndex = (keyChordIndex + selectedCapo) > 11 ?
                (keyChordIndex + selectedCapo) - 12 : (keyChordIndex + selectedCapo);
            count++;
            return (
                <View key={key} style={contentRowStyle}>
                    <View style={itemContainerStyle}>
                        <Text style={itemStyle}>
                            {keys[keyChordIndex].key}
                        </Text>
                    </View>

                    <View style={itemContainerStyle}>
                        <Text style={itemStyle}>
                            ⇒
                        </Text>
                    </View>

                    <View style={itemContainerStyle}>
                        <Text style={itemStyle}>
                            {keys[capoChordIndex].key}
                        </Text>
                    </View>
                </View>
            );
        })
    }

    render() {

        const {
            modalStyle, containerStyle, buttonContainerStyle, headerStyle,
            contentStyle, contentRowStyle, itemContainerStyle, itemHeadStyle,
            itemStyle
        } = styles;

        const {
            chordsModalIsOpen, closeChordsModal,
            selectedValues: { selectedKeyIndex, selectedCapo }, keys
        } = this.props;

        return (
            <Modal
                transparent
                animationType={'slide'}
                visible={chordsModalIsOpen}
                onRequestClose={() => closeChordsModal()}
            >
                <View style={modalStyle}>
                    <View style={containerStyle}>
                        <View style={headerStyle}>
                            <Text h4 style={{ color: 'white' }}>Chords Transition</Text>
                        </View>
                        <View style={contentStyle}>
                            <View style={contentRowStyle}>
                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle, itemHeadStyle]}>
                                        Key {keys[selectedKeyIndex].key}
                                    </Text>
                                </View>

                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle, itemHeadStyle]}>
                                        ⇒
                                    </Text>
                                </View>

                                <View style={itemContainerStyle}>
                                    <Text style={[itemStyle, itemHeadStyle]}>
                                        Capo {selectedCapo} Chords
                                    </Text>
                                </View>
                            </View>
                            {this.renderChordRows()}
                        </View>
                        <View style={buttonContainerStyle}>
                            <Button
                                raised
                                icon={{ name: 'close' }}
                                title="Close"
                                backgroundColor={APP_THEME_COLOR}
                                onPress={() => closeChordsModal()}
                            />
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}

const marginPercentage = 0.05;
const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0,0,0.5)'
    },
    containerStyle: {
        flex: 1,
        marginTop: SCREEN_HEIGHT * marginPercentage,
        marginBottom: SCREEN_HEIGHT * marginPercentage,
        marginLeft: SCREEN_WIDTH * marginPercentage,
        marginRight: SCREEN_WIDTH * marginPercentage,
        backgroundColor: 'white'
    },
    headerStyle: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: APP_THEME_COLOR
    },
    contentStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 10
    },
    contentRowStyle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemContainerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemHeadStyle: {
        fontWeight: '900',
        fontSize: 14
    },
    itemStyle: {
        alignItems: 'center',
        fontSize: 16,
        textAlign: 'center'
    },
    buttonContainerStyle: {
        paddingBottom: 10
    },
})

const mapStateToProps = (state) => {
    return {
        chordsModalIsOpen: state.modalReducer.chordsModalIsOpen,
        selectedValues: state.selectedValuesReducer,
        keys: state.keysReducer
    }
}


export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);