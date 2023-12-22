import { StatusBar } from 'expo-status-bar';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSharedState } from './hooks/useGlobalState';
import Account from './components/screens/Account/Account';
import Home from './components/screens/Home/Home';
import AllDBS from './components/screens/AllDBS/AllDBS';
import DBSGroup from './components/screens/DBSGroup/DBSGroup';
import DBSStudy from './components/screens/DBSStudy/DBSStudy';
import { GREEN_OLIVEDRAB } from './colors/colors';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// pull this data from firebase so the app wouldn't have to be republished
const dbs = {
  "Gospel Foundations": {
    "Good News!": 'gospel_1_good_news.pdf',
    "Repent": 'gospel_2_repend.pdf',
    "Sons and Daughters of the Father": 'gospel_3_father.pdf',
    "Redeemed Servants of the King": 'gospel_4_son.pdf',
    "Missionaries of the Spirit": 'gospel_5_spirit.pdf',
  },
  "Basic Commands": {
    "Hear God's Word": 'commands_1_bible.pdf',
    "Pray": 'commands_2_pray.pdf',
    "Worship": 'commands_3_worship.pdf',
    "Love": 'commands_4_love.pdf',
    "Give Generously": 'commands_5_give.pdf',
    "Break Bread": 'commands_6_break_bread.pdf',
    "Make Disciples": 'commands_7_go.pdf',
  },
  "Community Life": {
    "God's Family": 'community_1_gods_family.pdf',
    "Freedom and Love": 'community_2_freedom.pdf',
    "Household of God": 'community_3_household_of_god.pdf',
    "Meeting Needs": 'community_4_meeting_needs.pdf',
    "Body of Christ": 'community_5_body_of_christ.pdf',
    "Forgive": 'community_6_forgive.pdf',
    "Value the Family": 'community_7_value_the_fam.pdf',
  },
  "Gospel Living": {
    "Church": 'gl_01_church.pdf',
    "Community Life": 'gl_02_community_life.pdf',
    "Family": 'gl_03_famil.pdf',
    "Walk in the Spirit": 'gl_04_walk_in_spirit.pdf',
    "Mission Everywhere": 'gl_05_mission_everywhere.pdf',
    "Give an Answer": 'gl_06_mission_answers.pdf',
    "Household Mission": 'gl_07_household_mission.pdf',
    "Be Transformed": 'gl_08_transformed.pdf',
    "Individual Habits": 'gl_09_habits_individual.pdf',
    "Community Habits": 'gl_10_habits_community.pdf',
    "Marriage & Sexuality (a)": 'gl_11_marriage_and_sexuality__a.pdf',
    "Marriage & Sexuality (b)": 'gl_12_marriage_and_sexuality__b.pdf',
    "Godly Marriage": 'gl_13_godly_marriage.pdf',
    "Marriage and Community": 'gl_14_marriage_and_community.pdf',
    "Family and Culture": 'gl_15_family_and_culture.pdf',
    "Raising Children": 'gl_16_raising_children.pdf',
    "Managing the Home": 'gl_17_managing_home.pdf',
    "Doing Good": 'gl_18_doing_good.pdf',
    "Work": 'gl_19_work.pdf',
    "Wealth": 'gl_21_wealth.pdf',
    "Eternal Investments (1)": 'gl_22_eternal_investments_1.pdf',
    "Eternal Investments (2)": 'gl_23_eternal_investments_2.pdf',
  },
  "Colossians": {
    "Overview": 'colossians_1_overview.pdf',
    "God's Will": 'colossians_2_gods_will.pdf',
    "Jesus is All": 'colossians_3_jesus_all.pdf',
    "Fullness in Christ": 'colossians_4_fullness.pdf',
    "Put Off": 'colossians_5_put_on.pdf',
    "Put On": 'colossians_6_put_off.pdf',
    "Household of Faith": 'colossians_7_households.pdf',
    "Pray for Me": 'colossians_8_pray.pdf',
  },
  "Ephesians": {
    "Overview": 'ephisians_a.pdf',
    "Praise of His Glory": 'ephisians_b.pdf',
    "Eternal Purpose": 'ephisians_c.pdf',
    "Worthy of Calling": 'ephisians_d.pdf',
    "New Self": 'ephisians_e.pdf',
    "Submit to One Another": 'ephisians_f.pdf',
    "War of the Spirit": 'ephisians_g.pdf',
  }
};

const DBSStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Discovery Groups"
        component={AllDBS}
        options={{ headerTitle: 'Discovery Groups' }}
      />
      <Stack.Screen
        name="Group"
        component={DBSGroup}
        options={{ headerTitle: 'Studies' }}
      />
      <Stack.Screen
        name="Study"
        component={DBSStudy}
        options={{ headerTitle: 'DBS' }}
      />
    </Stack.Navigator>
  )
}

export default function App() {

  useSharedState('bibleStudies', dbs);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        // shifting={true}
        sceneAnimationEnabled={false}
        barStyle={{ backgroundColor: 'whitesmoke' }}
        activeColor={GREEN_OLIVEDRAB}
        inactiveColor={'black'}

      >
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: 'bell-outline',
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: 'home-account',
          }}
        />
        <Tab.Screen
          name="DBS"
          component={DBSStack}
          options={{
            tabBarIcon: 'message-text-outline',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}