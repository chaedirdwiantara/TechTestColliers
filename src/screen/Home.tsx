import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {useListEmployeeHook} from '../hooks/use-employeeList.hook';
import {
  EmployeeCard,
  Gap,
  LoadingIndicator,
  TopNavigation,
} from '../components';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParams} from '../navigations';

const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {isLoading, listEmployee, stopPagination, getListEmployee} =
    useListEmployeeHook();
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
    <SafeAreaView style={styles.container}>
      <TopNavigation.Type2
        title="List Employee"
        itemStrokeColor={color.Neutral[10]}
      />
      <View style={styles.bodyContainer}>
        <FlatList
          data={listEmployee}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({item, index}) => (
            <View style={{width: '100%'}}>
              <EmployeeCard data={item} onPress={() => handleOnPress(index)} />
            </View>
          )}
          onEndReached={handleEndScroll}
        />
        {isLoading && <LoadingIndicator size="small" />}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.Dark[800],
    alignItems: 'center',
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 1,
  },
  titleStyle: {
    color: color.Neutral[10],
  },
  listContainer: {
    marginTop: widthResponsive(20),
  },
  textStyle: {
    color: color.Neutral[10],
  },
});
