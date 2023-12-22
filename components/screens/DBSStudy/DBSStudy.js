import { View } from "react-native";
import styles from "./DBSStudyStyles";
import { useEffect } from "react";
import DBSButton from "../../global/DBSButton/DBSButton";
import { SafeAreaView } from "react-native-safe-area-context";
// import Pdf from "react-native-pdf";

const WEEBLY_PDF_URL = 'https://www.iamsent.net/uploads/8/1/1/0/81107342/';

export default function DBS ({ navigation, route }) {

    const { groupName, dbsName, dbsUrl } = route.params || {};
    const PdfResource = { uri: `${WEEBLY_PDF_URL}${dbsUrl}`,  cache: true };

    const handleClickBack = (e) => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.container}>
            <DBSButton 
                containerStyle={styles.backButton}
                iconName={'left'}
                iconSize={36}
                onPress={handleClickBack}
            />
            {/* <Pdf
                trustAllCerts={true}
                source={PdfResource}
                style={styles.pdf}
            /> */}
        </SafeAreaView>
    )
}