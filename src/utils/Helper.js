import { Alert } from 'react-native'

export function showAlert(title, message) {
    if (title != undefined && message != undefined) {
        Alert.alert(title, message)
    }
}

export function showAlertWithBack(title, message, navigation) {
    if (title != undefined && message != undefined) {
        Alert.alert(title, message, [
            { text: 'OK', onPress: () => { navigation.goBack() } },
        ])
    }
}