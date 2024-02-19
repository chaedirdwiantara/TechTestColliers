import {employeeDetailIF} from '../interface/detailEmployee.interface';
import baseApi from './base.api';

export const getDetailEmployeeEP = async (props: {
  id: number;
}): Promise<employeeDetailIF> => {
  const {data} = await baseApi().request<employeeDetailIF>({
    url: '/employee',
    method: 'GET',
    params: props,
  });

  return data;
};
