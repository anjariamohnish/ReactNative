import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';

class CapoKey extends Component {

    render() {

        const { keys, capoKeyIndex } = this.props;

        return (
            <View style={{ alignItems: "center" }}>
                <Text h3>Capo Key</Text>
                <Text h1>{keys[capoKeyIndex].key}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({

})


const mapStateToProps = (state) => {
    return {
        keys: state.keysReducer,
        capoKeyIndex: state.selectedValuesReducer.capoKeyIndex
    }
}

export default connect(mapStateToProps)(CapoKey);