import { StyleSheet } from "react-native";
import { GREEN_OLIVEDRAB } from "../../../colors/colors";

const styles = StyleSheet.create({
    background: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 10,
    },
    headerContainer: {
        marginBottom: 6,
        marginHorizontal: 32
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: GREEN_OLIVEDRAB,
    },
    introduction: {
        fontSize: 16,
        color: 'grey'
    },
    groupsList: {
        paddingHorizontal: 32,
        overflow: 'hidden'
    },
    groupContainer: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    groupName: {
        fontSize: 26,
        color: 'black',
    },
    groupArrow: {
        marginTop: 4,
        marginLeft: 6,
        color: 'darkslategrey'
    }
});

export default styles;