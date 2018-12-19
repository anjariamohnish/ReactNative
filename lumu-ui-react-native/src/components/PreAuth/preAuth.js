import React, { Component } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import Drawer from 'react-native-drawer'

import { STATUS_BAR_HEIGHT } from '../../constants';
import PreAuthControlPanel from './shared/preAuthControlPanel';
import PreAuthMain from './shared/preAuthMain';
import { toggleDrawer } from '../../actions';

class PreAuth extends Component {

    static navigationOptions = () => ({
        title: 'Pre-Authorization',
        headerStyle: {
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 0,
            // backgroundColor: '#2196F3'
        },
        gesturesEnabled: false
    });

    render() {

        const {

        } = styles;


        const drawerStyles = {
            drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3, backgroundColor: 'rgb(41,41,41)', },
            main: { paddingLeft: 3 },
        }

        return (
            <Drawer
                type="overlay"
                content={<PreAuthControlPanel />}
                open={this.props.openDrawer}
                onClose={this.props.toggleDrawer}
                tapToClose={true}
                openDrawerOffset={0.55}
                panOpenMask={0.01}
                closedDrawerOffset={-3}
                styles={drawerStyles}
                side={"right"}
            >
                <PreAuthMain />
            </Drawer>
        );
    }
}


const styles = StyleSheet.create({

})

const mapStateToProps = (state) => {
    return {
        openDrawer: state.lumuReducer.openDrawer
    }
}

export default connect(mapStateToProps, { toggleDrawer })(PreAuth);