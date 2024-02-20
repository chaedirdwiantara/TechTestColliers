import {useState} from 'react';
import {employeeDetailIF} from '../interface/detailEmployee.interface';
import {getDetailEmployeeEP} from '../api/detailEmployee.api';

export const useDetailEmployeeHook = () => {
  const [dataEmployee, setDataEmployee] = useState<employeeDetailIF>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getDetailEmployee = async (props: {id: number}) => {
    setIsLoading(true);
    try {
      const response = await getDetailEmployeeEP({
        id: props.id,
      });
      setDataEmployee(response);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    dataEmployee,
    setDataEmployee,
    getDetailEmployee,
  };
};
