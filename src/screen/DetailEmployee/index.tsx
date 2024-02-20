import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
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
import {DetailCard, LoadingIndicator, TopNavigation} from '../../components';

type PostDetailProps = NativeStackScreenProps<
  RootStackParams,
  'DetailEmployee'
>;

const DetailEmployee = ({route}: PostDetailProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {isLoading, isError, dataEmployee, getDetailEmployee, setDataEmployee} =
    useDetailEmployeeHook();
  useEffect(() => {
    getDetailEmployee({id: route.params.id});
  }, []);

  const leftIconOnPress = () => {
    navigation.goBack();
    setDataEmployee(undefined);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopNavigation.Type1
        title="Detail Employee"
        leftIconAction={leftIconOnPress}
        itemStrokeColor={color.Neutral[10]}
      />
      {dataEmployee && (
        <View style={styles.bodyContainer}>
          <DetailCard
            title={'Full Name'}
            value={`${dataEmployee?.first_name} ${dataEmployee?.last_name}`}
          />
          <DetailCard
            title={'Company Name'}
            value={`${dataEmployee?.company_name}`}
          />
          <DetailCard
            title={'City'}
            value={`${dataEmployee?.city}, ${dataEmployee?.state}, ${dataEmployee?.county}`}
          />
          <DetailCard title={'Address'} value={`${dataEmployee?.address}`} />
          <DetailCard title={'Email'} value={`${dataEmployee?.email}`} />
          <DetailCard
            title={'Phone Number'}
            value={`${dataEmployee?.phone1}`}
          />
        </View>
      )}
      {isLoading && <LoadingIndicator />}
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
