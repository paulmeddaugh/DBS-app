import { FlatList, Text, View } from "react-native";
import Background from "../../global/Background/Background";
import styles from "./AllDBSStyles";
import DBSButton from "../../global/DBSButton/DBSButton";
import { useSharedState } from "../../../hooks/useGlobalState";
import Icon from 'react-native-vector-icons/AntDesign';
import useViewportUnits from "../../../hooks/useViewportUnits";

export default function DBSGroups ({ navigation }) {

    const [bibleStudies] = useSharedState('bibleStudies');
    const discoveryGroups = Object.keys(bibleStudies) ?? [];

    const { vw } = useViewportUnits();

    const handleGroupClick = (groupName) => {
      const groupList = bibleStudies[groupName];
      navigation.navigate('Group', { groupName, groupList });
    };

    const renderGroupItem = ({ item }) => (
        <DBSButton 
          text={item}
          containerStyle={styles.groupContainer}
          textStyle={styles.groupName}
          iconName={"right"}
          iconSize={22}
          iconStyle={styles.groupArrow}
          onPress={() => handleGroupClick(item)}
        />
    );

    return (
      <Background style={styles.background}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Discovery Groups</Text>
          <Text style={styles.introduction}>[DBS Introduction]</Text>
        </View>
        <FlatList 
          data={discoveryGroups}
          renderItem={renderGroupItem}
          keyExtractor={(group) => group}
          style={[styles.groupsList, { width: vw(100) }]}
        />
      </Background>
    );
}