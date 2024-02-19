import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {color} from '../../theme';
import {widthResponsive} from '../../utils';
import {useNavigation} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../../navigations';
import {useDetailEmployeeHook} from '../../hooks/use-detailEmployee.hook';
import {mvs} from 'react-native-size-matters';
import {TopNavigation} from '../../components';

type PostDetailProps = NativeStackScreenProps<
  RootStackParams,
  'DetailEmployee'
>;

const DetailEmployee = ({route}: PostDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {dataEmployee, getDetailEmployee} = useDetailEmployeeHook();
  useEffect(() => {
    getDetailEmployee({id: route.params.id});
  }, []);

  const leftIconOnPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation.Type1
        title="Detail Employee"
        leftIconAction={leftIconOnPress}
        itemStrokeColor={color.Neutral[10]}
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.textStyle}>
          {dataEmployee?.first_name} {dataEmployee?.last_name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
  },
  textStyle: {
    fontSize: mvs(13),
    color: color.Neutral[10],
  },
  bodyContainer: {
    padding: widthResponsive(20),
  },
});
