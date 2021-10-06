import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // fit to parents
        width: '100%',
        padding: 10
    },
    button: {
        backgroundColor: 'yellow',
        height: 40,
        borderRadius: 20,
        // middle of height
        justifyContent: 'center',
        // middle of left and right
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        // make it toUpperCase
        textTransform: 'uppercase'
    }
});

export default styles;