import {createEmplyeeProps} from '../interface/createEmployee.interface';
import {employeeDetailIF} from '../interface/detailEmployee.interface';
import baseApi from './base.api';

export const setCreateEmployeeEP = async (
  props: createEmplyeeProps,
): Promise<employeeDetailIF> => {
  const {data} = await baseApi().request<employeeDetailIF>({
    url: '/employee/create',
    method: 'POST',
    data: props,
  });

  return data;
};
