import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../actions/modal_actions';
import { APP_THEME_COLOR } from '../constants';

class ViewChordsButton extends Component {

    render() {
        const { openChordsModal } = this.props
        return (
            <View style={this.props.style}>
                <Button
                    raised
                    icon={{ name: 'library-music' }}
                    title="View Transposed Chords"
                    backgroundColor={APP_THEME_COLOR}
                    onPress={() => openChordsModal()}
                />
            </View>
        );
    }
}

export default connect(null, { openChordsModal })(ViewChordsButton);