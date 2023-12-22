import { ImageBackground } from "react-native";
import useViewportUnits from "../../../hooks/useViewportUnits";
import bibleBackground from '../../../assets/images/homeIntro_cleanup.png';
import styles from "./BackgroundStyles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Background ({ children, style, ...props }) {

    const { vw, vh } = useViewportUnits();

    return (
        <ImageBackground 
            source={bibleBackground}
            style={[styles.container, style]}
            imageStyle={[styles.backgroundImage, { left: vw(-80) }]}
            blurRadius={2}
            {...props}
        >
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ImageBackground>
    )
}