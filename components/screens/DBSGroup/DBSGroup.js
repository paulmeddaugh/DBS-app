import { FlatList, Text, View } from "react-native";
import Background from "../../global/Background/Background";
import styles from "./DBSGroupStyles";
import DBSButton from "../../global/DBSButton/DBSButton";
import Icon from 'react-native-vector-icons/AntDesign';
import useViewportUnits from "../../../hooks/useViewportUnits";

export default function DBSStudies ({ navigation, route, group, ...props }) {

    const { groupName, groupList } = route.params || {};
    const { vw } = useViewportUnits();

    const handleClickBack = () => {
      navigation.goBack();
    }

    const handleStudyClick = (dbsName) => {
      const dbsUrl = groupList[dbsName];
      navigation.navigate('Study', { groupName, dbsName, dbsUrl });
    };

    const renderStudyItem = ({ item }) => (
      <DBSButton 
        containerStyle={styles.studyContainer}
        textStyle={styles.studyName}
        text={item}
        iconName={'right'}
        iconSize={20}
        iconStyle={styles.studyArrow}
        onPress={(e) => handleStudyClick(item)}
      />
    );

    return (
      <Background style={styles.background}>
        <DBSButton 
          text={groupName}
          textStyle={styles.groupNameText}
          containerStyle={styles.groupNameContainer}
          iconName={'left'}
          iconSize={36}
          iconStyle={styles.groupNameArrow}
          onPress={handleClickBack}
        />
        <FlatList 
          data={Object.keys(groupList)}
          renderItem={renderStudyItem}
          keyExtractor={(study) => `${groupName}${study}`}
          initialNumToRender={30}
          style={[styles.groupList, { width: vw(100) }]}
        />
      </Background>
    );
}