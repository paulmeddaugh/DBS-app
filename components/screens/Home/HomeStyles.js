import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content: {
        position: 'relative',
        flex: 1,
        justifyContent: 'space-between',
    },
    titleImage: {
        height: 44,
        alignSelf: 'center',
        marginTop: 14,
    },
    videoContainer: {
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: 'darkgrey',
        overflow: 'hidden',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    videoPreloader: {
        
    }
});

export default styles;