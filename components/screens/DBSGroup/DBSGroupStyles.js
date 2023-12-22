import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    groupNameContainer: {
        flexDirection: 'row-reverse',
        alignSelf: 'flex-start',
    },
    groupNameText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 8
    },
    groupNameArrow: {
        marginLeft: 12
    },
    groupList: {
        paddingHorizontal: 32
    },
    studyContainer: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginVertical: 8,
    },
    studyName: {
        fontSize: 26,
        marginBottom: 8
    },
    studyArrow: {
        marginTop: 5,
        marginLeft: 6,
        color: 'darkslategrey'
    }
});

export default styles;