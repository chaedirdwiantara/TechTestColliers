import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {eployeeList} from '../../../interface/employeeList.interface';
import {color} from '../../../theme';
import {widthResponsive} from '../../../utils';

interface EmployeeCardProps {
  data: eployeeList;
  onPress: () => void;
  disabled?: boolean;
}

const EmployeeCard: React.FC<EmployeeCardProps> = (
  props: EmployeeCardProps,
) => {
  const {data, onPress, disabled = false} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      disabled={disabled}>
      <Text style={styles.textStyle} numberOfLines={1}>
        {data.first_name} {data.last_name}
      </Text>
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
    marginHorizontal: widthResponsive(10),
    width: widthResponsive(140),
  },
  textStyle: {
    color: color.Neutral[10],
  },
});
