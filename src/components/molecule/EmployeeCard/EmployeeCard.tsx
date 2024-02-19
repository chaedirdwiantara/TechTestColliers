import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {eployeeList} from '../../../interface/employeeList.interface';
import {color} from '../../../theme';
import {widthResponsive} from '../../../utils';

interface EmployeeCardProps {
  data: eployeeList;
  onPress: () => void;
}

const EmployeeCard: React.FC<EmployeeCardProps> = (
  props: EmployeeCardProps,
) => {
  const {data, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{data.first_name}</Text>
    </TouchableOpacity>
  );
};

export default EmployeeCard;

const styles = StyleSheet.create({
  container: {
    padding: widthResponsive(10),
    borderWidth: 1,
    borderColor: color.Pink[200],
    borderRadius: 10,
    marginBottom: widthResponsive(10),
  },
  textStyle: {
    color: color.Neutral[10],
  },
});
