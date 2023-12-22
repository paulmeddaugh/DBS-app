import { TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign';
import styles from "./DBSButtonStyles";

export default function DBSButton ({ onPress, containerStyle, text, textStyle, iconStyle, iconName, iconSize}) {
    return (
        <TouchableOpacity 
            onPress={(e) => onPress?.(e)} 
            style={[styles.buttonContainer, containerStyle]}
        > 
            <View style={styles.button}>
                <Text style={textStyle}>{text}</Text>
            </View>
            {!!iconName && (
                <Icon name={iconName} size={iconSize} style={iconStyle} />
            )}
        </TouchableOpacity>
    );
}