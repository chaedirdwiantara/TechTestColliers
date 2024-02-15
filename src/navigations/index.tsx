import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  ViewStyle,
} from 'react-native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color, font} from '../theme';
import {normalize} from '../utils/formatter';

// Main
import {FeedScreen, HomeScreen, RewardScreen, ProfileScreen} from '../screen';

// Screen
// import {EventScreen} from '../screen/Event';

// Icon
import {FeedIcon, HomeIcon, ProfileIcon, RewardsIcon} from '../assets/icon';

// interface

export type RootStackParams = {
  SplashScreen: undefined;
  MainTab: undefined;
};

export type MainTabParams = {
  Feed: undefined;
  Home: undefined;
  Rewards: undefined;
  Profile: {
    showToast?: boolean;
    deletePlaylist?: boolean;
  };
};

const screenOption: NativeStackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
};

const MainTab = createBottomTabNavigator<MainTabParams>();
const TabScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<MainTabParams>>();
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.Pink[200],
        tabBarInactiveTintColor: color.Dark[300],
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 20 : 0,
          height: Platform.OS === 'ios' ? 84 : 64,
          backgroundColor: '#0F1319',
          borderTopColor: color.Dark[800],
        },
      }}>
      <MainTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity
              style={styles.root}
              onPress={() => navigation.navigate('Home')}>
              <HomeIcon stroke={color} />
              <Text style={[styles.label, {color}]}>{'Home'}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.root}>
              <FeedIcon stroke={color} />
              <Text style={[styles.label, {color}]}>{'Feed'}</Text>
            </View>
          ),
        }}
      />
      <MainTab.Screen
        name="Rewards"
        component={RewardScreen}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity
              style={styles.root}
              onPress={() => navigation.navigate('Rewards')}>
              <RewardsIcon stroke={color} />
              <Text style={[styles.label, {color}]}>{'Rewards'}</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        initialParams={{showToast: false, deletePlaylist: false}}
        options={{
          tabBarIcon: ({color}) => (
            <TouchableOpacity
              style={styles.root}
              onPress={() =>
                navigation.navigate('Profile', {
                  showToast: false,
                  deletePlaylist: false,
                })
              }>
              <ProfileIcon stroke={color} />
              <Text style={[styles.label, {color}]}>{'Profile'}</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackParams>();
export const RootStackScreen = () => (
  <RootStack.Navigator
    screenOptions={screenOption}
    // initialRouteName={'SplashScreen'}
  >
    <RootStack.Screen name="MainTab" component={TabScreen} />
  </RootStack.Navigator>
);

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily: font.InterMedium,
    fontSize: normalize(12),
    marginTop: 2,
  },
});
