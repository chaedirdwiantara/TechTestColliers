import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '../theme';
import {widthResponsive} from '../utils';
import {Gap, SearchBar} from '../components';
import ListSearch from '../components/molecule/Search/listSearch';

const FeedScreen = () => {
  const [state, setState] = useState<string>('');
  const [triggerSuggest, setTriggerSuggest] = useState<boolean>(false);

  useEffect(() => {
    if (state.length > 0) {
      setTriggerSuggest(true);
    }
  }, [state]);

  return (
    <View style={styles.container}>
      <Text style={{color: 'white'}}>Search Employee</Text>
      <Gap height={16} />
      <SearchBar
        value={state}
        onChangeText={(newText: string) => setState(newText)}
        // onSubmitEditing={() => setForTrigger(true)}
        rightIcon={state !== '' && true}
        reset={() => setState('')}
      />
      <Gap height={16} />
      {triggerSuggest && <ListSearch keyword={state} />}
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
