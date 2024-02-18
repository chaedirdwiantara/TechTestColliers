import {useState} from 'react';
import {loginUser} from '../api/auth.api';
import {storage} from './use-storage.hook';
import {LoginPropsType} from '../interface/auth.interface';

export const useAuthHook = () => {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const onLoginUser = async (props: LoginPropsType, type: string) => {
    setIsLoading(true);
    setIsError(false);
    setErrorMsg('');
    try {
      let response;
      response = await loginUser(props);
      storage.set('profile', JSON.stringify(response));
      setLoginSuccess(true);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    loginSuccess,
    isLoading,
    isError,
    errorMsg,
    onLoginUser,
  };
};
