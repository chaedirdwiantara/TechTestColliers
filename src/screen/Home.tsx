import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {useListEmployeeHook} from '../hooks/use-employeeList.hook';
import {EmployeeCard} from '../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {listEmployee, stopPagination, getListEmployee} = useListEmployeeHook();
  const [meta, setMeta] = useState<{page: number; size: number}>({
    page: 0,
    size: 15,
  });
  useEffect(() => {
    getListEmployee({page: meta.page, size: meta.size});
  }, []);

  const nextPage = () => {
    getListEmployee({page: meta.page + 1, size: meta.size});
    setMeta({
      ...meta,
      page: meta.page + 1,
    });
  };

  const handleEndScroll = () => {
    if (!stopPagination) {
      nextPage();
    }
  };

  const handleOnPress = (index: number) => {
    navigation.navigate('DetailEmployee', {id: index});
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={listEmployee}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => (
          <EmployeeCard data={item} onPress={() => handleOnPress(index)} />
        )}
        onEndReached={handleEndScroll}
      />
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
  root: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: color.Dark[500],
    paddingTop: widthResponsive(16),
    paddingBottom: widthResponsive(12),
    paddingHorizontal: widthResponsive(24),
  },
  textStyle: {
    color: color.Neutral[10],
  },
});
