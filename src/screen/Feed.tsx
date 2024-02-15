import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>FeedScreen</Text>
    </View>
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    padding: widthResponsive(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
