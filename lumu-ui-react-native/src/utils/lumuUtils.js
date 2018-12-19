import { Alert } from 'react-native';

export function showAlert(title, message, cancelable, _callback = () => { }, actionAlert = false) {
    let buttons = [];
    if (actionAlert) {
        buttons.push({ text: 'Cancel', onPress: _callback('NEGATIVE') });
        buttons.push({ text: 'OK', onPress: _callback('POSITIVE') });
    } else {
        buttons.push({ text: 'OK', onPress: _callback('POSITIVE') });
    }
    Alert.alert(
        title,
        message,
        buttons,
        { cancelable: cancelable }
    )
}