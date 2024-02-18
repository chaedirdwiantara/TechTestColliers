import {LoginPropsType, LoginResponseType} from '../interface/auth.interface';
import API from './base.api';

export const loginUser = async (
  loginProps: LoginPropsType,
): Promise<LoginResponseType> => {
  const {data} = await API.request<LoginResponseType>({
    url: '/login',
    method: 'POST',
    data: loginProps,
  });

  return data;
};
