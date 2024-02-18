import {Platform} from 'react-native';
import {LoginPropsType, LoginResponseType} from '../interface/auth.interface';
import baseApi from './base.api';

export const loginUser = async (
  loginProps: LoginPropsType,
): Promise<LoginResponseType> => {
  const {data} = await baseApi().request<LoginResponseType>({
    url: '/login',
    method: 'POST',
    data: loginProps,
    headers: {
      'X-OS-Platform': Platform.OS,
    },
  });

  return data;
};
