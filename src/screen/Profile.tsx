import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
