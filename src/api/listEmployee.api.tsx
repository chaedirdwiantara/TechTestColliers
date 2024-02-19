import {eployeeList} from '../interface/employeeList.interface';
import baseApi from './base.api';

export const getListEmployeeEP = async (props: {
  page: number;
  size: number;
}): Promise<eployeeList[]> => {
  const {data} = await baseApi().request<eployeeList[]>({
    url: '/employee',
    method: 'GET',
    params: props,
  });

  return data;
};
