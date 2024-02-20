import {useState} from 'react';
import {createEmplyeeProps} from '../interface/createEmployee.interface';
import {setCreateEmployeeEP} from '../api/createEmployee.api';

export const useCreateEmployeeHook = () => {
  const [createSuccess, setCreateSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onSubmitEmployee = async (props: createEmplyeeProps) => {
    setIsLoading(true);
    try {
      const response = await setCreateEmployeeEP(props);
      setCreateSuccess(true);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createSuccess,
    isLoading,
    isError,
    setIsError,
    onSubmitEmployee,
  };
};
