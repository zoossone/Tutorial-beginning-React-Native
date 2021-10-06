import { StyleSheet, Dimensions } from 'react-native';
//What is dimensions????

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        // height: '100%', It works if we only have one photo
        height: Dimensions.get('window').height,
    },

    titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    },

    title: {
        fontSize: 40,
        fontWeight: '600',
        // bold === '700'
    },

    subtitleCTA: {
        textDecorationLine: 'underline',
    },

    subtitle: {
        fontSize: 16,
        color: '#5c5e62'
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        // cover - fill until parents, contain - normal
        position: 'absolute',
        // can see titles
    },

    buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
});

export default styles;