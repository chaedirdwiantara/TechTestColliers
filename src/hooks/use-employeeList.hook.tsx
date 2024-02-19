import {useState} from 'react';
import {getListEmployeeEP} from '../api/listEmployee.api';
import {eployeeList} from '../interface/employeeList.interface';

export const useListEmployeeHook = () => {
  const [listEmployee, setListEmployee] = useState<eployeeList[]>([]);
  const [stopPagination, setStopPagination] = useState<boolean>(false);

  const getListEmployee = async (props: {page: number; size: number}) => {
    try {
      const response = await getListEmployeeEP({
        page: props.page,
        size: props.size,
      });
      if (response.length === 0) {
        setStopPagination(true);
      }
      if (props.page === 0) {
        setListEmployee(response);
      } else {
        if (listEmployee.length > 0 && response) {
          const updateList = listEmployee.concat(response);
          setListEmployee(updateList);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    listEmployee,
    stopPagination,
    getListEmployee,
  };
};
