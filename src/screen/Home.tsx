import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
