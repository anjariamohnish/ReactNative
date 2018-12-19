import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './components/login';
import Dashboard from './components/dashboard';
import PreAuth from './components/PreAuth/preAuth';

const Navigator = createStackNavigator({
    Login: { screen: Login },
    Dashboard: { screen: Dashboard },
    PreAuth: { screen: PreAuth }
})

export default createAppContainer(Navigator); 