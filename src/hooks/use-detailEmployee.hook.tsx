import {useState} from 'react';
import {employeeDetailIF} from '../interface/detailEmployee.interface';
import {getDetailEmployeeEP} from '../api/detailEmployee.api';

export const useDetailEmployeeHook = () => {
  const [dataEmployee, setDataEmployee] = useState<employeeDetailIF>();

  const getDetailEmployee = async (props: {id: number}) => {
    try {
      const response = await getDetailEmployeeEP({
        id: props.id,
      });
      setDataEmployee(response);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    dataEmployee,
    getDetailEmployee,
  };
};
